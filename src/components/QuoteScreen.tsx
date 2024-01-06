import { TQuote } from "@/helpers/types/Quote"
import { Box, Image, Heading, Center } from "@gluestack-ui/themed"
import { FullScreen } from "./FullScreen"

interface IQuoteScreenProps {
    quote: TQuote
}
export const QuoteScreen = ({ quote: { image, phrase } }: IQuoteScreenProps) => {

    return (
        <FullScreen>
            <Image
                alt="Imagem"
                size="full"
                source={{ uri: image }}
            />
            <Center h="$full" w="$full" p="$2" position="absolute" alignItems="center" justifyContent="center">
                <Box
                    alignItems="center"
                    justifyContent="center"
                    softShadow="3"
                    rounded="$2xl"
                    borderColor="$borderLight50" borderWidth="$1"
                    overflow="hidden"
                >
                    <Image
                        alt="Imagem borrada"
                        w="$full" h="$full"
                        position="absolute"
                        blurRadius={15}
                        source={{ uri: image }}
                    />
                    <Heading size="xl" color="$white" p="$5">
                        {`" ${phrase} "`}
                    </Heading>
                </Box>
            </Center>
        </FullScreen>
    )
}