import React, { useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
// Define AuthStackParamList here or import from the correct file if available
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  RoleSelection: undefined;
};
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const theme = useTheme();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Validate inputs
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      // Navigate to role selection after successful login
      navigation.navigate('RoleSelection');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.primary }]}>
          Welcome Back!
        </Text>

        {error ? (
          <Text style={[styles.error, { color: theme.colors.error }]}>
            {error}
          </Text>
        ) : null}

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon icon="email" />}
          error={!!error}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry={secureTextEntry}
          right={
            <TextInput.Icon
              icon={secureTextEntry ? 'eye-off' : 'eye'}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
          error={!!error}
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          loading={loading}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotButton}
          labelStyle={styles.forgotButtonLabel}
        >
          Forgot Password?
        </Button>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Button
            mode="text"
            onPress={() => navigation.navigate('Register')}
            labelStyle={[styles.footerText, { color: theme.colors.primary }]}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    padding: sizes.padding * 2,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: sizes.margin * 2,
  },
  title: {
    marginBottom: sizes.margin * 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: sizes.margin,
    backgroundColor: colors.white,
  },
  button: {
    marginTop: sizes.margin,
    paddingVertical: sizes.padding / 2,
    borderRadius: sizes.radius,
  },
  buttonLabel: {
    fontSize: sizes.body,
    fontWeight: 'bold',
  },
  forgotButton: {
    marginTop: sizes.margin,
  },
  forgotButtonLabel: {
    fontSize: sizes.caption,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes.margin * 2,
  },
  footerText: {
    fontSize: sizes.caption,
  },
  error: {
    marginBottom: sizes.margin,
    textAlign: 'center',
  },
});

export default LoginScreen;