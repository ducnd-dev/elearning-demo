'use client';

import request from "@/libs/request";
import { useSetUser } from "@/stores/user-store";
import React, { useEffect, useState, createContext, ReactNode } from "react";

interface UserStoreContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isProUser: boolean;
}

export const UserStoreContext = createContext<UserStoreContextType | null>(null);

interface UserStoreProviderProps {
  children: ReactNode;
}

export const UserStoreProvider = ({ children }: UserStoreProviderProps) => {
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

export const useUserStore = () => {
  const context = React.useContext(UserStoreContext);
  if (context === null) {
    throw new Error("useUserStore must be used within a UserStoreProvider");
  }
  return context;
};