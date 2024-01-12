import { VStack, Heading, Text, styled } from "@gluestack-ui/themed"
import { Gradient } from "./Gradient"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SlideUp } from "./animated/SlideUp"
import { ScaleIn } from "./animated/SlideIn"
import { FullScreen } from "./FullScreen"

const Icon = styled(MaterialCommunityIcons, {
    color: "$light100"
})

export const NoSearchTerm = () => {
    return (
        <FullScreen>
            <Gradient
                colors={['$pink500', '$pink700']}
                flex={1}
            >
                <VStack alignItems="center" justifyContent="center" p="$5" gap="$10" flex={1}>
                    <SlideUp>
                        <Heading color="$light100" size="3xl">Termo de busca</Heading>
                        <Text color="$light100" textAlign="center" size="lg">Busque frases a partir do termo de busca.</Text>
                        <Text color="$light100" textAlign="center" size="lg">Ex: "Frases motivacionais"</Text>
                    </SlideUp>
                    <ScaleIn>
                        <Icon name="comment-search" size={96} />
                    </ScaleIn>
                </VStack>
            </Gradient>
        </FullScreen>
    )
}