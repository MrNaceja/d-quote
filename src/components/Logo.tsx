import { Image } from "@gluestack-ui/themed"
import LogoPng from '../../assets/logo_branca.png'

export const Logo = () => {
    return (
        <Image
            source={LogoPng}
            alt="Logo D-Quote"
            size="md"
            resizeMode="contain"
            position="absolute"
            bottom="$0"
            left="$3"
            zIndex={999}
            opacity="$50"
        />
    )
}