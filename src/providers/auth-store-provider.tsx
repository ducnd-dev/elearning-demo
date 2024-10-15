'use client';

import request from "@/libs/request";
import { useSetUser } from "@/stores/auth-store";
import React, { useEffect, useState, createContext, ReactNode } from "react";

interface UserStoreContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isProUser: boolean;
}

export const UserStoreContext = createContext<UserStoreContextType | null>(null);

interface AuthStoreProviderProps {
  children: ReactNode;
}

export const AuthStoreProvider = ({ children }: AuthStoreProviderProps) => {
  const [user, setUser] = useState<Model.User | null>(null);
  const setUserStore = useSetUser();
  const [isProUser, setIsProUser] = useState<boolean>(false);
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await request<API.GetUser>('/v1/users/profile');
        setUser(user?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getUser();
  }, []);
  useEffect(() => {
    setUserStore(user);
    setIsProUser(user?.plan_id === 1);
  }, [user]);
  return <UserStoreContext.Provider value={{ user, setUser, isProUser }}>{children}</UserStoreContext.Provider>;
};

export const useAuthStore = () => {
  const context = React.useContext(UserStoreContext);
  if (context === null) {
    throw new Error("useAuthStore must be used within a AuthStoreProvider");
  }
  return context;
};