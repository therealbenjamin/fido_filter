import { IConnectionState } from './state';
import { IConnection } from './IConnection';

export interface IConnectionGetters {
  connections(state: IConnectionState): IConnection[];
  currentConnection(state: IConnectionState): IConnection;
}

export const ConnectionGetters: IConnectionGetters = {
  connections(state) {
    return state.connections;
  },
  currentConnection(state) {
    return state.currentConnection;
  },
};
