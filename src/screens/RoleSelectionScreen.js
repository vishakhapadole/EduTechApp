import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const roles = ['Student', 'Instructor'];

const RoleSelectionScreen = ({ navigation, route }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleContinue = () => {
    if (!selectedRole) {
      alert('Please select a role');
      return;
    }
    
    navigation.navigate('Register', { role: selectedRole });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      {roles.map((role) => (
        <TouchableOpacity
          key={role}
          style={[
            styles.roleButton,
            selectedRole === role && styles.selectedRoleButton,
          ]}
          onPress={() => setSelectedRole(role)}
        >
          <Text
            style={[
              styles.roleText,
              selectedRole === role && styles.selectedRoleText,
            ]}
          >
            {role}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#f9fafb' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  roleButton: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  selectedRoleButton: {
    borderColor: '#4f46e5',
    backgroundColor: '#e0e7ff',
  },
  roleText: { textAlign: 'center', fontSize: 16, color: '#333' },
  selectedRoleText: { fontWeight: 'bold', color: '#4f46e5' },
  continueButton: {
    marginTop: 20,
    backgroundColor: '#4f46e5',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default RoleSelectionScreen;

