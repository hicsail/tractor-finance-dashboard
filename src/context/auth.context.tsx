import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { User } from '@graphql/graphql';
import { useMeLazyQuery } from '@graphql/auth/auth';

export interface AuthContextProps {
  user?: User;
  setUser: (user: User) => void;
  token?: string;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  const [getMyInfo, { data }] = useMeLazyQuery();

  useEffect(() => {
    getMyInfo();
  }, [token]);

  useEffect(() => {
    if (data && data.me) {
      setUser(data.me);
    }
  }, [data]);

  // TODO: Remove when login is implemented
  useEffect(() => {
    console.log('TEST');
    getMyInfo();
  }, []);

  return <AuthContext.Provider value={{ user, token, setToken, setUser }} {...props} />;
};

export const useAuth = () => useContext(AuthContext);
