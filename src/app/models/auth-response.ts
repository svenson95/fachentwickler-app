import { HttpErrorResponse } from '@angular/common/http';

import { User } from './user';

export interface LoginResponse {
  isAuthenticated: boolean;
  message: string;
  user?: User;
  token?: string;
  response: HttpErrorResponse;
  request: any;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
  error?: Error;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
}

export interface AuthenticatedResponse {
  isAuthenticated: boolean;
  message: string;
  user?: User;
  token?: string;
  response: HttpErrorResponse;
  request: any;
}

export interface EditUserResponse {
  success: boolean;
  message: string;
  user?: User;
  error?: Error;
}
