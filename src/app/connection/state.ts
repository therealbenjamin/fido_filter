import { IConnection } from './IConnection';

export interface IConnectionState {
  /**
   * put your state attributes here, for example:
   * myAttribute: any;
   */
  connections: IConnection[];
  currentConnection: IConnection;
}

export const ConnectionDefaultState = (): IConnectionState => {
  return {
    /**
     * put your default value here, for example:
     * myAttribute: null,
     */
    connections: [],
    currentConnection: null,
  };
};
