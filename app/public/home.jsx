import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in the hero section on mount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const services = [
    { id: 1, name: 'Hair Cuts', desc: 'Elegant haircuts for men, women, and children.', img: require('../../assets/images/professional_cuts.jpg') },
    { id: 2, name: 'Women Art', desc: 'Beautiful hairstyles to match your style.', img: require('../../assets/images/women_plaiting.jpg') },
    { id: 3, name: 'Skincare & Facial', desc: 'Luxurious facial treatments.', img: require('../../assets/images/skin_treatment.webp') },
    { id: 4, name: 'Kids Cut', desc: 'Perfect cuts for little ones.', img: require('../../assets/images/kids_service.jpg') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      
      {/* ================= HERO ================= */}
      <Animated.View style={{ opacity: fadeAnim, height: 300 }}>
        <Image
          source={require('../../assets/images/hero_image.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', textShadowColor: '#000', textShadowOffset: {width: 1, height:1}, textShadowRadius: 5 }}>
            Salehish Beauty Parlour & Spa
          </Text>
          <Text style={{ color: '#fff', marginTop: 8, fontSize: 16, textAlign: 'center' }}>
            The Core of Beauty Parlour
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#2563eb',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Prove Us</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* ================= SERVICES CARDS ================= */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Our Popular Services</Text>
        {services.map((s, i) => (
          <TouchableOpacity
            key={s.id}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ServiceDetail', { service: s })}
            style={{
              marginBottom: 16,
              backgroundColor: '#fff',
              borderRadius: 12,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
            }}
          >
            <Image source={s.img} style={{ width: '100%', height: 180 }} />
            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{s.name}</Text>
              <Text style={{ fontSize: 14, color: '#555', marginBottom: 6 }}>{s.desc}</Text>
              <Text style={{ fontWeight: 'bold', color: '#2563eb' }}>UGX 20,000</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* ================= CTA ================= */}
      <View style={{ padding: 20, backgroundColor: '#2563eb', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Ready for Your Next Look?</Text>
        <Image
          source={require('../../assets/images/hair_cut_meme.jpg')}
          style={{ width: width - 32, height: 150, marginTop: 10, borderRadius: 12 }}
        />
      </View>

    </ScrollView>
  );
}