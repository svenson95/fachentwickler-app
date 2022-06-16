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

interface EditUserBase {
  _id: string;
}

export interface EditNameBody extends EditUserBase {
  newName: string;
}

export interface EditEmailBody extends EditUserBase {
  email: string;
}

export interface EditPasswordBody extends EditUserBase {
  password: string;
}

export interface EditThemeBody extends EditUserBase {
  theme: 'light' | 'dark';
}

export interface AddProgressBody {
  userId: string;
  postId: string;
}

export type EditBodyTypes = EditNameBody | EditEmailBody | EditPasswordBody | EditThemeBody;
