import { IConnectionState } from './state';
import { IConnection } from './IConnection';

export interface IConnectionMutations {
  SET_CONNECTIONS(state: IConnectionState, connections: IConnection[]): void;
  SET_CURRENT_CONNECTION(state: IConnectionState, connection: IConnection): void;
  ADD_CONNECTION(state: IConnectionState, connection: IConnection): void;
  UPDATE_CONNECTION(state: IConnectionState, connection: IConnection): void;
  DELETE_CONNECTION(state: IConnectionState, connection: IConnection): void;
}

export const ConnectionMutations: IConnectionMutations = {
  SET_CONNECTIONS: (state, connections) => {
    state.connections = connections;
  },
  SET_CURRENT_CONNECTION: (state, connection) => {
    state.currentConnection = connection;
  },
  ADD_CONNECTION: (state, connection) => {
    state.connections.push(connection);
  },
  UPDATE_CONNECTION: (state, connection) => {
    const idx = state.connections.findIndex((item) => item.id === connection.id);
    state.connections.splice(idx, 1, connection);
  },
  DELETE_CONNECTION: (state, connection) => {
    const idx = state.connections.findIndex((item) => item.id === connection.id);
    state.connections.splice(idx, 1);
  },
};
