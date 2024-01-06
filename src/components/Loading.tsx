import { Text, Heading, Spinner, VStack } from "@gluestack-ui/themed"
import { Gradient } from "./Gradient"
import { SlideUp } from "./animated/SlideUp"
import { FullScreen } from "./FullScreen"
import { ComponentProps } from "react"

interface ILoadingProps extends Partial<ComponentProps<typeof Gradient>> {

}
const Loading = (props : ILoadingProps) => {
    return (
        <Gradient
            {...props}
            colors={['$pink500', '$pink700']}
            flex={1}
        >
            <VStack alignItems="center" justifyContent="center" p="$5" gap="$10" flex={1}>
                <SlideUp>
                    <Heading color="$light100" size="3xl">Buscando frases...</Heading>
                    <Text color="$light100" textAlign="center" size="lg">Por favor aguarde.</Text>
                </SlideUp>
                <Spinner size="large" color="$white" />
            </VStack>
        </Gradient>
    )
}

const FullScreenLoading = () => (
    <FullScreen>
        <Loading />
    </FullScreen>
)

const FooterLoading = () => (
    <Loading p="$3"/>
)

export { FullScreenLoading, FooterLoading }