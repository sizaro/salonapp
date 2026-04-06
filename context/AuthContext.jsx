import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Load user from storage when app starts
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // 🔐 Mock login
  const login = async (emailOrPhone, password) => {
    if (
      (emailOrPhone === 'test@salon.com' ||
        emailOrPhone === '0712345678') &&
      password === '123456'
    ) {
      const userData = { emailOrPhone };

      setUser(userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData)); // SAVE

      return true;
    }
    return false;
  };

  // 🆕 Mock register
  const register = async (emailOrPhone, password) => {
    const userData = { emailOrPhone };

    setUser(userData);
    await AsyncStorage.setItem('user', JSON.stringify(userData));

    return true;
  };

  // 🚪 Logout
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user'); // CLEAR
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};