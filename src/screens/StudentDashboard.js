import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AuthContext from '../context/AuthContextBase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

// Helper to extract name from email
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

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  const displayName = user?.displayName || extractNameFromEmail(user?.email) || 'Student';

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <MaterialCommunityIcons name="account-outline" size={90} color="#4f46e5" style={styles.avatar} />
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      {/* Quick Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Links</Text>
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('Certificates')}>
            <MaterialCommunityIcons name="certificate-outline" size={28} color="#4f46e5" />
            <Text style={styles.linkLabel}>Certificates</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('CourseList')}>
            <MaterialCommunityIcons name="book-open-page-variant" size={28} color="#4f46e5" />
            <Text style={styles.linkLabel}>My Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('QuizScreen')}>
            <MaterialCommunityIcons name="file-document-edit-outline" size={28} color="#4f46e5" />
            <Text style={styles.linkLabel}>Quizzes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('Profile')}>
            <MaterialCommunityIcons name="cog-outline" size={28} color="#4f46e5" />
            <Text style={styles.linkLabel}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityBox}>
          <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={22} color="#22c55e" />
          <Text style={styles.activityText}>Completed: React Native Quiz</Text>
        </View>
        <View style={styles.activityBox}>
          <MaterialCommunityIcons name="clock-outline" size={22} color="#f97316" />
          <Text style={styles.activityText}>Upcoming: Firebase Live Class</Text>
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="star-outline" size={24} color="#facc15" />
            <Text style={styles.badgeLabel}>Top Learner</Text>
          </View>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="check-decagram-outline" size={24} color="#10b981" />
            <Text style={styles.badgeLabel}>100% Course</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#f6faff' },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#4f46e5' },
  email: { fontSize: 14, color: '#4b5563' },
  section: { backgroundColor: '#ffffff', padding: 16, borderRadius: 10, marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12, color: '#1e40af' },
  quickLinks: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  linkItem: { alignItems: 'center', marginBottom: 12, width: '22%' },
  linkLabel: { fontSize: 12, marginTop: 4, color: '#1e3a8a', textAlign: 'center' },
  activityBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 8 },
  activityText: { fontSize: 14, color: '#374151' },
  badgeRow: { flexDirection: 'row', gap: 12 },
  badge: {
    backgroundColor: '#fef9c3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
  },
  badgeLabel: { fontSize: 12, marginTop: 4, color: '#92400e' },
});

export default StudentDashboard;
