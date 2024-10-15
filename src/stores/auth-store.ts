import { createStore } from 'zustand/vanilla';
import { setCookie } from 'cookies-next';

interface UserState {
  user: any;
  setUser: (user: Model.User | null) => void;
  logout: () => void;
}

export const useAuthStore = createStore<UserState>

export const userStore = useAuthStore((set) => ({
  user: null,
  setUser: (user: any) => {
    set({ user });
    setCookie('plan', user?.plan_id);
  },
  logout: () => set({ user: null }),
}))

export const createUserStore = (initialState: any) => useAuthStore((set) => ({
  user: initialState,
  setUser: (user: any) => set({ user }),
  logout: () => set({ user: null }),
}))

export const useUser = () => userStore.getState().user
export const useSetUser = () => userStore.getState().setUser
export const useLogout = () => userStore.getState().logout