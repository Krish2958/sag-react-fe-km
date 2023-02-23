import { TokenManger } from './token-manager';

export const isAuthenticated = () => {
  return !!TokenManger.getToken();
};
