import { StatusBar, Dimensions } from "react-native";
const SCREEN_WITHOUT_STATUS_BAR = Dimensions.get('screen')
export const SCREEN = {
    width: SCREEN_WITHOUT_STATUS_BAR.width, 
    height: SCREEN_WITHOUT_STATUS_BAR.height + Number(StatusBar.currentHeight)
}
export const SCREEN_FILL = { w: SCREEN.width, h: SCREEN.height }