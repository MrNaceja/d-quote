import { styled } from "@gluestack-ui/themed"
import { AnimatedView } from '@gluestack-style/animation-resolver'

export const ScaleIn = styled(AnimatedView, {
    ":initial": {
        opacity: 0, scale: 0.5
    },
    ":animate": {
        opacity: 1, scale: 1
    },
    ":transition": {
        //@ts-ignore
        duration: 800, delay: 0.5
    },
    alignItems: "center", justifyContent: "center"
})