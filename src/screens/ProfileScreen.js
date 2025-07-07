import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, TextInput } from 'react-native';
import AuthContext from '../context/AuthContextBase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const { logout, user } = useContext(AuthContext);
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');
  const [newPassword, setNewPassword] = useState('');
  const [profileName, setProfileName] = useState('');

  const toggleExpand = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      <View style={styles.section}>
        {/* Notification Preferences */}
        <TouchableOpacity style={styles.settingItem} onPress={() => toggleExpand('notifications')}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#4b5563" />
          <Text style={styles.label}>Notification Preferences</Text>
        </TouchableOpacity>
        {expanded === 'notifications' && (
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Enable Notifications</Text>
            <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
          </View>
        )}

        {/* Reset Password */}
        <TouchableOpacity style={styles.settingItem} onPress={() => toggleExpand('reset')}>
          <MaterialCommunityIcons name="lock-reset" size={24} color="#4b5563" />
          <Text style={styles.label}>Reset Password</Text>
        </TouchableOpacity>
        {expanded === 'reset' && (
          <View style={styles.dropdown}>
            <TextInput placeholder="Old password" secureTextEntry style={styles.input} />
            <TextInput placeholder="New password" secureTextEntry style={styles.input} />
            <TextInput placeholder="Confirm new password" secureTextEntry style={styles.input} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Update Profile */}
        <TouchableOpacity style={styles.settingItem} onPress={() => toggleExpand('profile')}>
          <MaterialCommunityIcons name="account-edit-outline" size={24} color="#4b5563" />
          <Text style={styles.label}>Update Profile</Text>
        </TouchableOpacity>
        {expanded === 'profile' && (
          <View style={styles.dropdown}>
            <TextInput placeholder="Full Name" value={profileName} onChangeText={setProfileName} style={styles.input} />
            <TextInput placeholder="Email Address" keyboardType="email-address" autoCapitalize="none" style={styles.input} />
            <TextInput placeholder="Phone Number" keyboardType="phone-pad" style={styles.input} />
            <TextInput placeholder="City" style={styles.input} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Language */}
        <TouchableOpacity style={styles.settingItem} onPress={() => toggleExpand('language')}>
          <MaterialCommunityIcons name="translate" size={24} color="#4b5563" />
          <Text style={styles.label}>Language</Text>
        </TouchableOpacity>
        {expanded === 'language' && (
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Current: {language}</Text>
            <TouchableOpacity onPress={() => setLanguage('English')}>
              <Text style={styles.option}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLanguage('Hindi')}>
              <Text style={styles.option}>Hindi</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* OTP Verification */}
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('OTP')}>
          <MaterialCommunityIcons name="cellphone-key" size={24} color="#4b5563" />
          <Text style={styles.label}>OTP Verification</Text>
        </TouchableOpacity>

        {/* Checkout (only for students) */}
        {user?.role === 'student' && (
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('Checkout', { course: { title: 'Sample Course', price: 499 } })}
          >
            <MaterialCommunityIcons name="credit-card-outline" size={24} color="#4b5563" />
            <Text style={styles.label}>Checkout</Text>
          </TouchableOpacity>
        )}

        {/* Privacy & Security */}
        <TouchableOpacity style={styles.settingItem} onPress={() => toggleExpand('privacy')}>
          <MaterialCommunityIcons name="shield-lock-outline" size={24} color="#4b5563" />
          <Text style={styles.label}>Privacy & Security</Text>
        </TouchableOpacity>
        {expanded === 'privacy' && (
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Your data is encrypted and protected.</Text>
          </View>
        )}
      </View>

      <TouchableOpacity onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#f9fafe' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#1e3a8a' },
  section: { backgroundColor: '#ffffff', borderRadius: 10, padding: 16, marginBottom: 20 },
  settingItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, gap: 12 },
  label: { fontSize: 15, color: '#1f2937' },
  dropdown: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 36,
  },
  dropdownLabel: { fontSize: 14, marginBottom: 8, color: '#374151' },
  input: {
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  option: {
    paddingVertical: 6,
    fontSize: 14,
    color: '#1e40af',
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});

export default ProfileScreen;
