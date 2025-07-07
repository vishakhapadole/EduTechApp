import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AuthContext from '../context/AuthContextBase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

// Helper function to extract a readable name from email
const extractNameFromEmail = (email) => {
  if (!email) return '';
  const namePart = email.split('@')[0];
  return namePart
    .replace(/[^a-zA-Z ]/g, ' ')
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .trim();
};

const InstructorDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  const displayName = user?.displayName || extractNameFromEmail(user?.email) || 'Instructor';

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarWrapper}>
          <MaterialCommunityIcons name="account-outline" size={90} color="#4f46e5" style={styles.avatar} />
        </View>
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      {/* Quick Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Links</Text>
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.linkItem}>
            <MaterialCommunityIcons name="clipboard-text-outline" size={28} color="#d97706" />
            <Text style={styles.linkLabel}>Quiz Results</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}>
            <MaterialCommunityIcons name="book-edit-outline" size={28} color="#d97706" />
            <Text style={styles.linkLabel}>My Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}>
            <MaterialCommunityIcons name="video-outline" size={28} color="#d97706" />
            <Text style={styles.linkLabel}>Live Sessions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}>
            <MaterialCommunityIcons name="cog-outline" size={28} color="#d97706" />
            <Text style={styles.linkLabel}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityBox}>
          <MaterialCommunityIcons name="account-check-outline" size={22} color="#22c55e" />
          <Text style={styles.activityText}>Reviewed: UI/UX Quiz</Text>
        </View>
        <View style={styles.activityBox}>
          <MaterialCommunityIcons name="calendar-clock" size={22} color="#f97316" />
          <Text style={styles.activityText}>Scheduled: React Class</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff8f1' },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  avatarWrapper: {
    borderWidth: 3,
    borderColor: '#4f46e5',
    borderRadius: 50,
    padding: 5,
    marginBottom: 10,
  },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#92400e' },
  email: { fontSize: 14, color: '#4b5563' },
  section: { backgroundColor: '#ffffff', padding: 16, borderRadius: 10, marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12, color: '#78350f' },
  quickLinks: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  linkItem: { alignItems: 'center', marginBottom: 12, width: '22%' },
  linkLabel: { fontSize: 12, marginTop: 4, color: '#78350f', textAlign: 'center' },
  activityBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  activityText: { fontSize: 14, color: '#374151' },
});

export default InstructorDashboard;
