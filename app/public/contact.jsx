import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // For now, just log the inputs
    console.log({ name, email, message });
    alert('Message sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.subtitle}>
          Have questions or want to book an appointment? Reach out to us!
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, { height: 120 }]}
            placeholder="How can we help?"
            multiline
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#111827',
    backgroundColor: '#fefefe',
  },
  button: {
    backgroundColor: '#1e40af',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});