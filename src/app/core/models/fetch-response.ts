import { UserData } from './user';

export interface BasicResponse {
  success: boolean;
  message: string;
  error?: Error;
  code?: string;
}

export interface AuthResponse extends BasicResponse {
  user?: UserData;
}

export interface TokenResponse extends AuthResponse {
  token?: string;
}

export interface UserProgressResponse extends AuthResponse {
  progress?: any;
}
