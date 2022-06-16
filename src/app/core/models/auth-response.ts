import { BaseResponse } from './base-response';
import { UserData } from './user';

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
