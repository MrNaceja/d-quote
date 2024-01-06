import { Notify } from "@/components/Notify";
import { TUseNotify, TUseNotifyActions } from "@/helpers/types/Notify";
import { useToast } from "@gluestack-ui/themed"
import { useCallback } from 'react';

export const useNotify : TUseNotify = () => {
    const notify = useToast()

    const showInfo : TUseNotifyActions['showInfo'] = useCallback((title, description) => {
        notify.show({
            placement: "bottom",
            duration: 3500,
            render: ({ id }) => <Notify title={title} description={description} nativeID={`toast-${id}`} type="info"/>
        })
    }, [notify])

    const showError : TUseNotifyActions['showError'] = useCallback((error) => {
        notify.show({
            placement: "bottom",
            duration: 3500,
            render: ({ id }) => <Notify title="Erro inesperado" description={error} nativeID={`toast-${id}`} type="error"/>
        })
    }, [notify])
    
    return {...notify, showInfo, showError}
}