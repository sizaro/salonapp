import { useRouter, useSegments } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function BottomTabs() {
  const router = useRouter();
  const segments = useSegments();

  const isActive = (path) => segments.includes(path);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 60, backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={() => router.push('/home')}>
        <Text style={{ color: isActive('home') ? 'blue' : 'gray' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/services')}>
        <Text style={{ color: isActive('services') ? 'blue' : 'gray' }}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/about')}>
        <Text style={{ color: isActive('about') ? 'blue' : 'gray' }}>About</Text>
      </TouchableOpacity>
    </View>
  );
}