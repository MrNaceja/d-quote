import { Stack } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config';

export default function LayoutStack() {
  return (
    <GluestackUIProvider config={config}>
      <Stack screenOptions={{
        headerShown: false,
        statusBarStyle: "light",
        statusBarTranslucent: true
      }}>
        <Stack.Screen name="index" />
      </Stack>
    </GluestackUIProvider>
  )
}

