import { ConnectionMutations } from './mutations';
import { ConnectionDefaultState, IConnectionState } from './state';

describe('ConnectionMutations', () => {
  let testState: IConnectionState;

  beforeEach(() => {
    testState = ConnectionDefaultState();
  });

  test('it should set connections', () => {
    const expected = [{ id: '1' }];

    ConnectionMutations.SET_CONNECTIONS(testState, expected);
    expect(testState.connections).toEqual(expected);
  });

  test('it should set currentConnection', () => {
    const expected = { id: '1' };

    ConnectionMutations.SET_CURRENT_CONNECTION(testState, expected);
    expect(testState.currentConnection).toEqual(expected);
  });

  test('it should add and update a connection', () => {
    const connection = { id: '1' };
    ConnectionMutations.ADD_CONNECTION(testState, connection);
    expect(testState.connections).toEqual([connection]);

    connection.id = '2';

    ConnectionMutations.UPDATE_CONNECTION(testState, connection);
    expect(testState.connections).toEqual([connection]);
  });

  test('it should delete a connection', () => {
    const connection = { id: '1' };
    ConnectionMutations.ADD_CONNECTION(testState, connection);
    expect(testState.connections).toHaveLength(1);

    ConnectionMutations.DELETE_CONNECTION(testState, connection);
    expect(testState.connections).toHaveLength(0);
  });
});
