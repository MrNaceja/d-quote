import { Toast, VStack, ToastTitle, ToastDescription, Icon, InfoIcon, HStack } from "@gluestack-ui/themed"
import { ComponentProps, useMemo } from "react"

interface INotifyProps extends ComponentProps<typeof Toast> {
    title: string,
    description: string,
    type: 'info' | 'error'
}
export const Notify = ({ title, description, type, ...restToastProps }: INotifyProps) => {

    const [bg, accent] = useMemo(() => {
        return {
            'info': ['$pink100', '$pink500'], 
            'error': ['$red100', '$red500']
        }[type]
    },[type])
    
    return (
        <Toast bg={bg} {...restToastProps} bottom="$20">
            <VStack space="xs">
                <HStack alignItems="center" space="md">
                    <Icon as={InfoIcon} size="lg" color={accent}/>
                    <ToastTitle color={accent}>{title}</ToastTitle>
                </HStack>
                <ToastDescription color={accent}>{description}</ToastDescription>
            </VStack>
        </Toast>
    )
}