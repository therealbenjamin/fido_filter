import { Module } from 'vuex';
import { IState } from '@/app/state';
import { ConnectionDefaultState, IConnectionState } from './state';
import { ConnectionActions } from './actions';
import { ConnectionGetters } from './getters';
import { ConnectionMutations } from './mutations';

export const ConnectionModule: Module<IConnectionState, IState> = {
  namespaced: true,
  actions: {
    ...ConnectionActions,
  },
  getters: {
    ...ConnectionGetters,
  },
  state: {
    ...ConnectionDefaultState(),
  },
  mutations: {
    ...ConnectionMutations,
  },
};
