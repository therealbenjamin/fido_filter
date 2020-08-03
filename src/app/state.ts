import { AppDefaultState, IAppState } from './app/state';
import { AuthDefaultState, IAuthState } from './shared/modules/auth/state';
import { IConnectionState } from './connection/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  auth?: IAuthState;
  connection?: IConnectionState;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState(),
    ...AuthDefaultState(),
  },
};
