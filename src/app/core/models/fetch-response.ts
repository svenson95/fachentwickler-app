import { User } from './user';

export interface BasicResponse {
  success: boolean;
  message: string;
  error?: Error;
  code?: string;
}

export interface AuthResponse extends BasicResponse {
  user?: User;
}

export interface TokenResponse extends AuthResponse {
  token?: string;
}

export interface UserProgressResponse extends AuthResponse {
  progress?: any;
}
