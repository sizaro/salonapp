import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Animated, { FadeInUp, Layout } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function Services() {
  const navigation = useNavigation();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const dummyData = [
        {
          id: 1,
          service_name: 'Hair Cuts',
          description: 'Elegant haircuts for men, women, and children.',
          service_amount: 20000,
          image_url: require('../../assets/images/western_cuts.jpg'),
        },
        {
          id: 2,
          service_name: 'Women Art',
          description: 'Beautiful hairstyles to match your style.',
          service_amount: 25000,
          image_url: require('../../assets/images/women_plaiting.jpg'),
        },
        {
          id: 3,
          service_name: 'Skincare & Facial',
          description: 'Luxurious facial treatments.',
          service_amount: 35000,
          image_url: require('../../assets/images/skin_treatment.webp'),
        },
        {
          id: 4,
          service_name: 'Kids Cut',
          description: 'Perfect cuts for little ones.',
          service_amount: 15000,
          image_url: require('../../assets/images/kids_service.jpg'),
        },
      ];
      setServices(dummyData);
    };

    fetchServices();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Our Full Service Menu</Text>

      <View style={styles.cardsContainer}>
        {services.map((service, index) => (
          <Animated.View 
            key={service.id} 
            entering={FadeInUp.delay(index * 100)}
            layout={Layout.springify()}
          >
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ServiceDetail', { service })}
            >
              <View style={styles.imageContainer}>
                {service.image_url ? (
                  <Image
                    source={service.image_url}
                    style={styles.image}
                    resizeMode="cover"
                  />
                ) : (
                  <Text>Image Coming Soon</Text>
                )}
              </View>
              <Text style={styles.serviceName}>{service.service_name}</Text>
              <Text style={styles.description}>{service.description}</Text>
              <Text style={styles.amount}>UGX {service.service_amount}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e3a8a', // blue-700
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: width / 2 - 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  imageContainer: {
    height: 120,
    borderRadius: 12,
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 6,
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2563eb',
  },
});