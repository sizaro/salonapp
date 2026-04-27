import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function OwnerDashboard() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace('/(public)/home');
  };

  return (
    <ScrollView style={styles.container}>

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

      {/* SUMMARY SECTION */}
      <Text style={styles.sectionTitle}>Summary</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Pending Appointments</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Users</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Expenses</Text>
        <Text style={styles.value}>0</Text>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(owner)/appointments')}
      >
        <Text style={styles.buttonText}>View Appointments</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(owner)/create-service')}
      >
        <Text style={styles.buttonText}>Add Service</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(owner)/create-expense')}
      >
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(owner)/create-advance')}
      >
        <Text style={styles.buttonText}>Add Advance</Text>
      </TouchableOpacity>

      {/* LOGOUT */}
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
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
    marginTop: 10,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});