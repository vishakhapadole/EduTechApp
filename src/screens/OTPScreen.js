import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OTP Verification (Coming Soon)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold' },
});

export default OTPScreen;
