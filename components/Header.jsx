import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const router = useRouter();
  const { user, login, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleLogin = async () => {
  const result = await login(email, password);

  if (result.success) {
    setMenuOpen(false);

    if (result.user.role === "owner") {
      router.replace("/owner/dashboard");
    } else if (result.user.role === "manager") {
      router.replace("/manager/dashboard");
    } else {
      router.replace("/employee/dashboard");
    }
  } else {
    Alert.alert("Login Failed", result.message || "Invalid credentials");
  }
};

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    router.replace('/public/home');
  };

  return (
    <View style={{ zIndex: 100 }}>
      {/* HEADER */}
      <View
        style={{
          height: 60,
          justifyContent: 'center',
          paddingHorizontal: 16,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Title */}
          <TouchableOpacity onPress={() => router.push('/home')}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Salon App
            </Text>
          </TouchableOpacity>

          {/* Dots */}
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
  <Ionicons name="person-circle-outline" size={28} color="black" />
</TouchableOpacity>
        </View>
      </View>

      {/* OVERLAY */}
      {menuOpen && (
        <Pressable
          onPress={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {/* DROPDOWN */}
      {menuOpen && (
        <View
          style={{
            position: 'absolute',
            top: 80,
            right: 16,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 12,
            width: 220,
            elevation: 5,
            zIndex: 200,
          }}
        >
          {!user ? (
            <>
              {/* Email */}
              <Text style={{ fontSize: 12, marginBottom: 4 }}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 6,
                  padding: 8,
                  marginBottom: 10,
                }}
              />

              {/* Password */}
              <Text style={{ fontSize: 12, marginBottom: 4 }}>Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                secureTextEntry
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 6,
                  padding: 8,
                  marginBottom: 12,
                }}
              />

              {/* Login Button */}
              <TouchableOpacity
                onPress={handleLogin}
                style={{
                  backgroundColor: '#facc15',
                  padding: 10,
                  borderRadius: 6,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Login</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* Logged in view */}
              <Text style={{ marginBottom: 12 }}>
                Logged in as {user.emailOrPhone}
              </Text>

              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  backgroundColor: '#f87171',
                  padding: 10,
                  borderRadius: 6,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontWeight: 'bold', color: '#fff' }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );
}