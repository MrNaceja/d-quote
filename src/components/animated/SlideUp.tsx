import { styled } from "@gluestack-ui/themed"
import { AnimatedView } from '@gluestack-style/animation-resolver'

export const SlideUp = styled(AnimatedView, {
    ":initial": {
        opacity: 0, y: 80
    },
    ":animate": {
        opacity: 1, y: 0
    },
    ":transition": {
        //@ts-ignore
        duration: 800
    },
    alignItems: "center", justifyContent: "center"
})