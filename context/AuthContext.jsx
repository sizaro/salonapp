import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const API_URL = 'http://192.168.1.104:5500';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Load stored auth on app start
  useEffect(() => {
    const loadAuth = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedToken = await AsyncStorage.getItem('token');

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (err) {
        console.log('Auth load error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
  }, []);

  const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/api/mobile/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data?.message };
    }

    const { token: jwtToken, user: userData } = data;

    setUser(userData);
    setToken(jwtToken);

    await AsyncStorage.setItem('user', JSON.stringify(userData));
    await AsyncStorage.setItem('token', jwtToken);

    return {
      success: true,
      user: userData,
      token: jwtToken,
    };

  } catch (err) {
    console.log('Login error:', err.message);
    return { success: false, message: err.message };
  }
};

  // 🚪 LOGOUT
  const logout = async () => {
    setUser(null);
    setToken(null);

    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};