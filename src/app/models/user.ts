
export interface User {
  name: string;
  email: string;
  password: string;
  progress: string[];
  role: 'admin' | 'user';
  theme: 'light' | 'dark';
}

export interface AuthUser {
  username: string;
  password: string;
}

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}
