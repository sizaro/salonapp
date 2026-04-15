import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function OwnerDashboard() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace('/(public)/home');
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>👑 Owner Dashboard</Text>

      {/* USER INFO */}
      <View style={styles.card}>
        <Text style={styles.label}>Welcome</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Role</Text>
        <Text style={styles.value}>{user?.role}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>User ID</Text>
        <Text style={styles.value}>{user?.id}</Text>
      </View>

      {/* FUTURE ACTIONS */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('More owner features coming soon')}
      >
        <Text style={styles.buttonText}>View Reports</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ef4444' }]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#1e40af',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});