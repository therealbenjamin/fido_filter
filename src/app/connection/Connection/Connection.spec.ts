import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Connection from './Connection.vue';
import { IConnectionState } from '../state';
import { ConnectionModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Connection.vue', () => {
  let store: Store<IConnectionState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        connection: ConnectionModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Connection, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Connection.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Connection');
  });
});
