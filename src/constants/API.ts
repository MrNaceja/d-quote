import { SCREEN } from "./SCREEN";
export const QUOTES_URL = process.env.EXPO_PUBLIC_URL_API_QUOTES;
export const IMAGE_URL = `${process.env.EXPO_PUBLIC_URL_API_IMAGES}/${parseInt(SCREEN.width.toString())}x${parseInt(SCREEN.height.toString())}?landscape`