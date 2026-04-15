import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function OwnerLayout() {
  const { user, token, loading } = useContext(AuthContext);

  if (loading) return null;

  if (!user || !token) {
    return <Redirect href="/(public)/home" />;
  }

  if (user.role !== 'owner') {
    return <Redirect href="/(public)/home" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* MAIN DASHBOARD */}
      <Stack.Screen name="dashboard" />

      {/* FUTURE SCREENS (optional explicit control) */}
      {/* <Stack.Screen name="settings" /> */}
      {/* <Stack.Screen name="profile" /> */}
    </Stack>
  );
}