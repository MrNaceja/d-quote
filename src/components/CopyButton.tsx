import { Fab, CopyIcon, FabIcon } from "@gluestack-ui/themed"
import * as Clipboard from 'expo-clipboard'
import { ComponentProps, useEffect } from "react"
import { useNotify } from "@/hooks/useNotify"

interface ICopyButton extends ComponentProps<typeof Fab> {
    textToCopy: string
}
export const CopyButton = ({ textToCopy, ...fabProps }: ICopyButton) => {
    const notify = useNotify()

    useEffect(() => {
        const notifySub = Clipboard.addClipboardListener(({ contentTypes }: Clipboard.ClipboardEvent) => {
            if (contentTypes.includes(Clipboard.ContentType.PLAIN_TEXT)) {
                Clipboard.getStringAsync().then(phrase => notify.showInfo('Frase copiada!', phrase))
            }
        })
        return () => Clipboard.removeClipboardListener(notifySub)
    }, [notify])
    
    return (
        <Fab
            onPress={async () => Clipboard.setStringAsync(textToCopy)}
            bg="$pink500"
            h="$16" w="$16"
            rounded="$full"
            placement="bottom right"
            $active-bg="$pink600"
            {...fabProps}
        >
            <FabIcon as={CopyIcon} color="$white" size="lg" />
        </Fab>
    )
}