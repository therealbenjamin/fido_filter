import { ActionContext } from 'vuex';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';
import { IConnectionState } from './state';
import { IConnection } from './IConnection';

export interface IConnectionActions {
  fetchConnections(context: ActionContext<IConnectionState, IState>): Promise<any>;
  fetchConnection(context: ActionContext<IConnectionState, IState>, id: string): Promise<any>;
  addConnection(context: ActionContext<IConnectionState, IState>, connection: IConnection): Promise<any>;
  updateConnection(context: ActionContext<IConnectionState, IState>, connection: IConnection): Promise<any>;
  deleteConnection(context: ActionContext<IConnectionState, IState>, connection: IConnection): Promise<any>;
}

export const ConnectionActions: IConnectionActions = {
  async fetchConnections({ commit }) {
    try {
      const response = await HttpService.get<IConnection[]>('/connection');
      commit('SET_CONNECTIONS', response.data);
    } catch (e) {
      throw e;
    }
  },
  async fetchConnection({ commit }, id) {
    try {
      const response = await HttpService.get<IConnection>(`/connection/${id}`);
      commit('SET_CURRENT_CONNECTION', response.data);
    } catch (e) {
      throw e;
    }
  },
  async addConnection({ commit }, connection) {
    try {
      const response = await HttpService.post<IConnection>('/connection', connection);
      commit('ADD_CONNECTION', response.data);
    } catch (e) {
      throw e;
    }
  },
  async updateConnection({ commit }, connection) {
    try {
      const response = await HttpService.put<IConnection>(`/connection/${connection.id}`, connection);
      commit('UPDATE_CONNECTION', response.data);
    } catch (e) {
      throw e;
    }
  },
  async deleteConnection({ commit }, connection) {
    try {
      await HttpService.delete<IConnection>(`/connection/${connection.id}`);
      commit('DELETE_CONNECTION', connection);
    } catch (e) {
      throw e;
    }
  },
};
