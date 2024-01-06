import { CheckIcon, Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed"
import { ComponentProps, useCallback } from "react"
import { Keyboard } from "react-native"

interface ISearchTerm extends ComponentProps<typeof InputField> {
    onConfirm: () => void
 }
export const SearchTerm = ({onConfirm, value, ...inputProps}: ISearchTerm) => {

    const handleConfirmSearchTerm = useCallback(() => {
        Keyboard.dismiss()
        onConfirm()
    }, [onConfirm])

    return (
        <Input
            variant="rounded"
            size="lg"
            position="absolute"
            top="$16"
            right="$5" left="$5"
            zIndex={999}
            borderColor="$borderDark100"
            bg="$white"
        >
            <InputField
                onBlur={Keyboard.dismiss}
                returnKeyType="done"
                onSubmitEditing={onConfirm}
                color="$pink500"
                placeholderTextColor="$trueGray400"
                placeholder='Termo de busca'
                p="$0"
                {...inputProps}
            />
            <InputSlot 
                bg={value ? "$pink500" : "$light300"} 
                h="$full" w="$11" rounded="$full" 
                onPress={handleConfirmSearchTerm} 
                disabled={!value}
            >
                <InputIcon as={CheckIcon} color="$white" />
            </InputSlot>
        </Input>

    )
}