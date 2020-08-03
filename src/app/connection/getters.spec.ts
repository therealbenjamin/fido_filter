import { ConnectionGetters } from './getters';
import { ConnectionDefaultState, IConnectionState } from './state';

describe('ConnectionGetters', () => {
  let testState: IConnectionState;

  beforeEach(() => {
    testState = ConnectionDefaultState();
  });

  test('it should get the connections', () => {
    expect(ConnectionGetters.connections(testState)).toEqual(testState.connections);
  });

  test('it should get the connections', () => {
    expect(ConnectionGetters.currentConnection(testState)).toEqual(testState.currentConnection);
  });
});
