import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({ email, password }); // 🔥 replace with real auth later
    setMenuOpen(false);
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
          marginTop: 20,
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
            <Text style={{ fontSize: 24 }}>⋮</Text>
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

      {/* DROPDOWN LOGIN FORM */}
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
        </View>
      )}
    </View>
  );
}