import { useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Index() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        router.replace('/(tabs)');
      } else {
        router.replace('/auth');
      }
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Salon App</Text>
    </View>
  );
}