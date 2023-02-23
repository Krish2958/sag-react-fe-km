import { TokenManager } from './token-manager';

export const isAuthenticated = () => {
  return !!TokenManager.getToken();
};
