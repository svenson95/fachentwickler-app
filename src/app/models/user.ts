
export interface User {
  name: string;
  email: string;
  password?: string;
  progress: string[];
  role: UserRole;
  theme: 'light' | 'dark';
  _id: string;
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
}

export interface EditUser {
  name: string;
  newName?: string;
  email?: string;
  password?: string;
  theme?: string;
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
