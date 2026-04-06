import { Tabs, useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Header from '../../components/Header';
import { AuthContext } from '../../context/AuthContext';

export default function TabsLayout() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/auth');
    }
  }, [user]);

  // optional loading state
  if (!user) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="home" options={{ title: 'Home' }} />
        <Tabs.Screen name="services" options={{ title: 'Services' }} />
        <Tabs.Screen name="about" options={{ title: 'About' }} />
        <Tabs.Screen name="contact" options={{ title: 'Contact' }} />
      </Tabs>
    </View>
  );
}