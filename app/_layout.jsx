// app/_layout.jsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Splash screen */}
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      {/* Tabs layout */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }}
      />
    </Stack>
  );
}