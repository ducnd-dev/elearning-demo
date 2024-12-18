'use client';
import { createStore } from 'zustand/vanilla';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import request from '@/libs/request';

interface UserState {
  user: any;
  setUser: (user: Model.User | null) => void;
  logout: () => void;
}

export const useAuthStore = createStore<UserState>

export const userStore = useAuthStore((set) => ({
  user: getCookie('user') ? JSON.parse(getCookie('user') || '') :null,
  setUser: (user: any) => {
    set({ user });
    setCookie('plan', user?.plan_id);
  },
  logout: () => {

    request<any>('/v1/users/logout', {
      method: 'POST',
    }).then(() => {
        set({ user: null })
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
          if (name !== 'setting') {
            deleteCookie(name);
          }
        }
        localStorage.clear();
        window.location.href = '/';
    });
  },
}))

export const createUserStore = (initialState: any) => useAuthStore((set) => ({
  user: initialState,
  setUser: (user: any) => {
    set({ user })
    setCookie('plan', user?.plan_id);
  },
  logout: () => set({ user: null }),
}))

export const useUser = () =>({
  user: userStore.getState().user,
  isProUser: userStore.getState().user?.plan_id === 1,
  setUser: userStore.getState().setUser,
  logout: userStore.getState().logout,
})
export const useSetUser = () => userStore.getState().setUser
export const useLogout = () => userStore.getState().logout
