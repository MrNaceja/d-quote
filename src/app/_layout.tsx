import { Stack } from 'expo-router'
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config';

export default function LayoutStack() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar barStyle="light-content" translucent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </GluestackUIProvider>
  )
}

