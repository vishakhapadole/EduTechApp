import React, { useState, useContext } from 'react';
import {
  View, Image, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AuthContext from '../context/AuthContextBase';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // <- Add role state

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be at least 8 characters long and include one letter, one number, and one special character.'
      );
      return;
    }

    if (!role) {
      Alert.alert('Select Role', 'Please select a role (Student or Instructor).');
      return;
    }

    try {
      await login(email, password);
      if (role === 'student') {
        navigation.navigate('StudentDashboard');
      } else if (role === 'instructor') {
        navigation.navigate('InstructorDashboard');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={[{ width: 120, height: 120, alignSelf: 'center', marginBottom: 16 }]}
      />
      <Text style={[styles.title, { textAlign: 'center', marginBottom: 8 }]}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {/* Role Picker */}
      <Picker
        selectedValue={role}
        style={styles.input}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="Select Role" value="" />
        <Picker.Item label="Student" value="student" />
        <Picker.Item label="Instructor" value="instructor" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>Don't have an account? Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f6f9ff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
  button: { backgroundColor: '#4f46e5', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { marginTop: 12, color: '#4f46e5', textAlign: 'center' },
});

export default LoginScreen;
