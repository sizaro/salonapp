import { Tabs } from 'expo-router';
import { View } from 'react-native';
import Header from '../../components/Header';

export default function PublicLayout() {

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