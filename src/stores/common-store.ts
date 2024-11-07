import { getCookie } from "cookies-next"
import { createStore } from "zustand/vanilla"

interface CommonState {
  setting: Model.Setting | null
  setSetting: (setting: Model.Setting | null) => void
}

export const useCommonStore = createStore<CommonState>()

export const commonStore = useCommonStore((set) => ({
  setting: typeof getCookie('setting') === 'string' ? JSON.parse(getCookie('setting') as string) : null,
  setSetting: (setting) => set({ setting }),
}))

export const createCommonStore = (initialState: any) =>
  useCommonStore((set) => ({
    setting: initialState,
    setSetting: (setting) => set({ setting }),
  }))
export const useSetting = () => ({
  setting: commonStore.getState().setting,
  setSetting: commonStore.getState().setSetting,
})