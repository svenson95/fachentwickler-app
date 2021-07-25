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

export interface ConfirmationResponse {
  success: boolean;
  message: string;
  error?: Error;
  response?: any;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  code?: string;
  error?: Error;
  response?: any;
}

export interface ChangePasswordResponse {
  success: boolean;
  message: string;
  code?: string;
  error?: Error;
  response?: any;
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
  error?: any;
  response: HttpErrorResponse;
  request: any;
}

export interface EditUserResponse {
  success: boolean;
  message: string;
  user?: User;
  error?: Error;
}

export interface AddProgressResponse {
  success: boolean;
  message: string;
  progress?: any;
  user?: User;
  error?: any;
}
