'use client';

import request from "@/libs/request";
import { useLogout, useSetUser, useUser } from "@/stores/auth-store";
import { getCookie, setCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, createContext, ReactNode } from "react";

interface UserStoreContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isProUser: boolean;
  useLogout: () => void;
}

export const UserStoreContext = createContext<UserStoreContextType | null>(null);

interface AuthStoreProviderProps {
  children: ReactNode;
}

export const AuthStoreProvider = ({ children }: AuthStoreProviderProps) => {
  const { setUser, user } = useUser();
  const setUserStore = useSetUser();
  const [isProUser, setIsProUser] = useState<boolean>(false);
  const pathname = usePathname()
  useEffect(() => {
    console.log('pathname', pathname);

    const getUser = async () => {
      try {
        const token = getCookie('token');
        console.log('token1111', token);

        if (!token) {
          return;
        }
        const user = await request<API.GetUser>('/v1/users/profile');
        setUser(user?.data);
        localStorage.setItem('user', JSON.stringify(user?.data));
        setCookie('user', JSON.stringify(user?.data));
        setCookie('token', token);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getUser();
  }, [pathname]);

  useEffect(() => {
    setUserStore(user);
    setIsProUser(user?.plan_id === 1);
  }, [user]);

  return <UserStoreContext.Provider value={{ user, setUser, isProUser, useLogout }}>{children}</UserStoreContext.Provider>;
};

export const useAuthStore = () => {
  const context = React.useContext(UserStoreContext);
  if (context === null) {
    throw new Error("useAuthStore must be used within a AuthStoreProvider");
  }
  return context;
};
