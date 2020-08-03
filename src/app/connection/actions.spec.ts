import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';
import { ConnectionActions } from './actions';
import { ConnectionDefaultState, IConnectionState } from './state';

describe('ConnectionActions', () => {
  let testContext: ActionContext<IConnectionState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: ConnectionDefaultState(),
    } as ActionContext<IConnectionState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  describe('fetchConnections', () => {
    test('it should call SET_CONNECTIONS on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = {};

      mockAxios.onGet('/connection').reply(200, expected);

      await ConnectionActions.fetchConnections(testContext);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['SET_CONNECTIONS', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onGet('/connection').reply(500);

      try {
        await ConnectionActions.fetchConnections(testContext);
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('fetchConnection', () => {
    test('it should call SET_CURRENT_CONNECTION on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = {};

      mockAxios.onGet('/connection/1').reply(200, expected);

      await ConnectionActions.fetchConnection(testContext, '1');

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['SET_CURRENT_CONNECTION', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onGet('/connection/1').reply(500);

      try {
        await ConnectionActions.fetchConnection(testContext, '1');
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('addConnection', () => {
    test('it should call ADD_CONNECTION on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = {};

      mockAxios.onPost('/connection').reply(200, expected);

      await ConnectionActions.addConnection(testContext, expected);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['ADD_CONNECTION', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onPost('/connection').reply(500);

      try {
        await ConnectionActions.addConnection(testContext, {});
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('updateConnection', () => {
    test('it should call UPDATE_CONNECTION on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = { id: '1' };

      mockAxios.onPut('/connection/1').reply(200, expected);

      await ConnectionActions.updateConnection(testContext, expected);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['UPDATE_CONNECTION', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onPut('/connection/1').reply(500);

      try {
        await ConnectionActions.updateConnection(testContext, { id: '1' });
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });

  describe('deleteConnection', () => {
    test('it should call DELETE_CONNECTION on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;
      const expected = { id: '1' };

      mockAxios.onDelete('/connection/1').reply(200, expected);

      await ConnectionActions.deleteConnection(testContext, expected);

      const actual = commitMock.mock.calls[0];

      expect(actual).toEqual(['DELETE_CONNECTION', expected]);
    });

    test('it should throw an error on failure', async () => {
      mockAxios.onDelete('/connection/1').reply(500);

      try {
        await ConnectionActions.deleteConnection(testContext, { id: '1' });
      } catch (e) {
        expect(e.message).toEqual('Request failed with status code 500');
      }
    });
  });
});
