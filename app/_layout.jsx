
export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)" />
      </Stack>
  );
}