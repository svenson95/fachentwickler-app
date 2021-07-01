
export interface User {
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

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export interface UserProgress {
  _id?: string;
  userId: string;
  postId: string;
}
