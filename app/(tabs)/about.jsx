import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
export default function About() {

  // ✅ MOCK DATA
  const users = [
    {
      id: 1,
      first_name: 'Sarah',
      last_name: 'Saleh',
      role: 'owner',
      bio: 'Founder of Salehish Beauty Salon, passionate about beauty and confidence.',
      image_url: require('../../assets/images/saleh_ntege.webp'),
    },
    {
      id: 2,
      first_name: 'Arafat',
      last_name: 'Manager',
      role: 'manager',
      title: 'Salon Manager',
      bio: 'Ensures everything runs smoothly and customers leave happy.',
      image_url: require('../../assets/images/arafati.webp'),
    },
    {
      id: 3,
      first_name: 'Alice',
      last_name: 'Stylist',
      role: 'employee',
      specialty: 'Hair Styling',
      image_url: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      first_name: 'Brian',
      last_name: 'Barber',
      role: 'employee',
      specialty: 'Men Cuts',
      image_url: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      first_name: 'Diana',
      last_name: 'Skin',
      role: 'employee',
      specialty: 'Facials & Skincare',
      image_url: 'https://via.placeholder.com/300',
    },
  ];

  // ✅ SAME LOGIC (unchanged)
  const owner = users.find(u => u.role === 'owner') || {};
  const manager = users.find(u => u.role === 'manager') || {};
  const employees = users.filter(u => !['owner', 'manager', 'customer'].includes(u.role));

  const fullName = user => `${user.first_name || ''} ${user.last_name || ''}`;

  return (
    <ScrollView style={styles.container}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>About Salehish Beauty Parlour & Spa</Text>
        <Text style={styles.heroSubtitle}>
          Where skill meets passion — founded and led by {fullName(owner)}.
        </Text>
      </View>

      {/* Owner */}
      {owner.id && (
        <Animated.View entering={FadeInUp.duration(800)} style={styles.section}>
          <Image source={owner.image_url } style={styles.ownerImage} />
          <Text style={styles.name}>{fullName(owner)}</Text>
          <Text style={styles.role}>Owner</Text>
          <Text style={styles.bio}>{owner.bio}</Text>
        </Animated.View>
      )}

      {/* Story */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Story</Text>
        <Text style={styles.storyText}>
          Salehish Beauty Salon was established in 2020 as a modern, inclusive, and innovative grooming space.
        </Text>
        <Text style={styles.storyText}>
          We blend artistry and professionalism to deliver confidence and beauty to every client.
        </Text>
      </View>

      {/* Manager */}
      {manager.id && (
        <Animated.View entering={FadeInUp.duration(800).delay(200)} style={styles.section}>
          <Image source={manager.image_url } style={styles.managerImage} />
          <Text style={styles.name}>{fullName(manager)}</Text>
          <Text style={styles.role}>{manager.title}</Text>
          <Text style={styles.bio}>{manager.bio}</Text>
        </Animated.View>
      )}

      {/* Employees */}
      {employees.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <FlatList
            data={employees}
            keyExtractor={emp => emp.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Animated.View entering={FadeInUp.duration(600)} style={styles.card}>
                <Image source={{ uri: item.image_url }} style={styles.cardImage} />
                <Text style={styles.cardName}>{fullName(item)}</Text>
                <Text style={styles.cardRole}>{item.specialty}</Text>
              </Animated.View>
            )}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },

  hero: {
    padding: 20,
    alignItems: 'center',
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  heroSubtitle: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 8,
    textAlign: 'center',
  },

  section: {
    padding: 16,
    marginVertical: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  ownerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 10,
  },

  managerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  role: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },

  bio: {
    fontSize: 13,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 6,
  },

  storyText: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 6,
  },

  card: {
    width: 140,
    marginRight: 12,
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    padding: 10,
  },

  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 6,
  },

  cardName: {
    color: '#fff',
    fontWeight: 'bold',
  },

  cardRole: {
    color: '#aaa',
    fontSize: 12,
  },
});