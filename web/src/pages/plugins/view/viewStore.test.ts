import { afterEach, describe, expect, test } from 'bun:test'
import type { EventFrame, ViewNode } from '../../../lib/rpc'
import { ViewSession, onPluginViewEventForTest, setPluginNavigator } from './viewStore'

const root = (text: string): ViewNode => ({ id: 'root', k: 'text', p: { text }, c: [] })

/** 构造一个已登记的 ready 会话（绕过 RPC）。 */
function readySession(id: string, seq = 3): ViewSession {
  const session = new ViewSession({ identity: 'a@x', view: 'v', locale: 'zh-CN' })
  const internals = session as unknown as { seq: number; register(id: string): void; set(next: object): void }
  internals.seq = seq
  internals.register(id)
  internals.set({ phase: 'ready', tree: root('hello') })
  return session
}

const daemonFrame = (event: object): EventFrame => ({ event: { service: 'daemon', event } }) as unknown as EventFrame

afterEach(() => setPluginNavigator(null))

describe('plugin view effects', () => {
  test('action frame runs navigate without touching tree or seq', () => {
    const targets: string[] = []
    setPluginNavigator((target) => targets.push(target))
    const session = readySession('s1')
    const before = session.getState().tree
    onPluginViewEventForTest(
      daemonFrame({
        type: 'pluginViewFrame',
        data: { session: 's1', seq: 3, ops: [], effects: [{ kind: 'navigate', target: 'rss' }, { kind: 'future' }] },
      }),
    )
    expect(targets).toEqual(['rss'])
    expect(session.getState().tree).toBe(before)
    // seq 未被改动：下一帧 seq 4 仍按 last+1 应用。
    onPluginViewEventForTest(
      daemonFrame({
        type: 'pluginViewFrame',
        data: { session: 's1', seq: 4, ops: [{ op: 'props', id: 'root', set: { text: 'next' }, unset: [] }] },
      }),
    )
    expect(session.getState().tree?.p.text).toBe('next')
    session.dispose()
  })

  test('unknown session or missing navigator is ignored', () => {
    onPluginViewEventForTest(
      daemonFrame({ type: 'pluginViewFrame', data: { session: 'nope', seq: 1, ops: [], effects: [{ kind: 'navigate', target: 'rss' }] } }),
    )
    const session = readySession('s2')
    onPluginViewEventForTest(
      daemonFrame({ type: 'pluginViewFrame', data: { session: 's2', seq: 3, ops: [], effects: [{ kind: 'navigate', target: 'rss' }] } }),
    )
    expect(session.getState().phase).toBe('ready')
    session.dispose()
  })
})

describe('plugin view requested close', () => {
  test('requested close hands off to onRequestClose instead of closed state', () => {
    const session = readySession('s3')
    let closed = 0
    session.onRequestClose = () => {
      closed += 1
    }
    onPluginViewEventForTest(daemonFrame({ type: 'pluginViewClosed', data: { session: 's3', reason: 'requested' } }))
    expect(closed).toBe(1)
    expect(session.getState().phase).toBe('ready')
    expect(session.sessionId).toBeNull()
    session.dispose()
  })

  test('without handler requested close enters closed state', () => {
    const session = readySession('s4')
    onPluginViewEventForTest(daemonFrame({ type: 'pluginViewClosed', data: { session: 's4', reason: 'requested' } }))
    expect(session.getState().phase).toBe('closed')
    expect(session.getState().reason).toBe('requested')
    session.dispose()
  })

  test('other reasons still enter closed state even with a handler', () => {
    const session = readySession('s5')
    let closed = 0
    session.onRequestClose = () => {
      closed += 1
    }
    onPluginViewEventForTest(daemonFrame({ type: 'pluginViewClosed', data: { session: 's5', reason: 'expired' } }))
    expect(closed).toBe(0)
    expect(session.getState().phase).toBe('closed')
    session.dispose()
  })
})
