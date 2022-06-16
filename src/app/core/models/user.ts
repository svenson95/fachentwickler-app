import { BaseResponse } from './base-response';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface UserData {
  _id: string;
  name: string;
  email: string;
  password?: string;
  progress: string[];
  active: boolean;
  role: UserRole;
  theme: 'light' | 'dark';
}

export interface AuthUser {
  username: string;
  password: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  theme: 'light' | 'dark';
}

export interface EditUser {
  _id: string;
  newName?: string;
  email?: string;
  password?: string;
  theme?: 'light' | 'dark';
}

export interface UserProgress {
  _id?: string;
  userId: string;
  postId: string;
}

export interface AuthNullResponse extends BaseResponse {
  data: null;
}

export interface AuthUserResponse extends BaseResponse {
  data: { user: UserData } | null;
}

export interface AuthUserTokenResponse extends BaseResponse {
  data: { token: string; user: UserData } | null;
}

export interface AuthUserProgressResponse extends BaseResponse {
  data: { progress: string; user: UserData } | null;
}
