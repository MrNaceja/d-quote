import { TToast } from "./Toast"

export type TUseNotifyActions = Omit<TToast, 'show'> & {
    showInfo: (title: string, description: string) => void,
    showError: (error : string) => void
}
export type TUseNotify = () => TUseNotifyActions