import { User } from './user';

export interface AuthResponse {
  isAuthenticated: boolean;
  token?: string;
  user: User;
}
