import { createStore } from 'zustand/vanilla';
import { setCookie } from 'cookies-next';

interface UserState {
  user: any;
  setUser: (user: Model.User | null) => void;
  logout: () => void;
}

export const useUserStore = createStore<UserState>

export const userStore = useUserStore((set) => ({
  user: null,
  setUser: (user: any) => {
    set({ user });
    setCookie('plan', user?.plan_id);
  },
  logout: () => set({ user: null }),
}))

export const createUserStore = (initialState: any) => useUserStore((set) => ({
  user: initialState,
  setUser: (user: any) => set({ user }),
  logout: () => set({ user: null }),
}))

export const useUser = () => userStore.getState().user
export const useSetUser = () => userStore.getState().setUser
export const useLogout = () => userStore.getState().logout