import { SCREEN_FILL } from "@/constants/SCREEN"
import { Box } from "@gluestack-ui/themed"
import { ComponentProps } from "react"

interface IFullScreenProps extends ComponentProps<typeof Box> {

}
export const FullScreen = (props : IFullScreenProps) => {
    return (
        <Box {...props} {...SCREEN_FILL} flex={1}/>
    )
}