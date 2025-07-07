import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Platform, PermissionsAndroid } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { generateCertificateHTML } from '../utils/certificateTemplate';
import AuthContext from '../context/AuthContextBase';

const sampleCertificate = [
  {
    id: '1',
    courseTitle: 'React Native Basics',
    score: 95,
    issueDate: { seconds: 1700000000 },
    instructor: 'Ananya Mehta',
    certificateId: 'RN-2024-001',
  },
  {
    id: '2',
    courseTitle: 'Advanced JavaScript',
    score: 88,
    issueDate: { seconds: 1710000000 },
    instructor: 'Ravi Kapoor',
    certificateId: 'JS-2024-014',
  },
  {
    id: '3',
    courseTitle: 'Python for Data Science',
    score: 92,
    issueDate: { seconds: 1720000000 },
    instructor: 'Dr. Neha Sharma',
    certificateId: 'PYDS-2024-027',
  },
  {
    id: '4',
    courseTitle: 'Machine Learning Foundations',
    score: 90,
    issueDate: { seconds: 1730000000 },
    instructor: 'Amit Verma',
    certificateId: 'MLF-2024-033',
  },
  {
    id: '5',
    courseTitle: 'Cloud Computing with AWS',
    score: 85,
    issueDate: { seconds: 1740000000 },
    instructor: 'Sneha Iyer',
    certificateId: 'AWS-2024-045',
  },
];



const CertificatesScreen = () => {
  const { user } = useContext(AuthContext);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
  
    setCertificates(sampleCertificate);
  }, []);

  const downloadCertificate = async (userName, courseTitle, issueDate) => {
    const html = generateCertificateHTML(userName, courseTitle, issueDate);
    const options = {
      html,
      fileName: `${userName}-${courseTitle}-certificate`,
      directory: 'Documents',
    };

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Denied', 'Cannot save certificate.');
        return;
      }
    }

    try {
      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('Success', `Certificate saved at:\n${file.filePath}`);
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to generate certificate.');
    }
  };
const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.course}>{item.courseTitle}</Text>
    <Text style={styles.meta}>Instructor: {item.instructor}</Text>
    <Text style={styles.meta}>Certificate ID: {item.certificateId}</Text>
    <Text style={styles.meta}>Score: {item.score}%</Text>
    <Text style={styles.meta}>Issued on: {new Date(item.issueDate.seconds * 1000).toLocaleDateString()}</Text>

    <TouchableOpacity
      onPress={() =>
        downloadCertificate(
          user.email ? user.email.split('@')[0] : 'User',
          item.courseTitle,
          new Date(item.issueDate.seconds * 1000).toLocaleDateString()
        )
      }
      style={styles.downloadButton}
    >
      <Text style={styles.downloadButtonText}>Download Certificate</Text>
    </TouchableOpacity>
  </View>
);


  return (
    <FlatList
      data={certificates}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12, elevation: 2 },
  course: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  downloadButton: { marginTop: 10, backgroundColor: '#4f46e5', padding: 10, borderRadius: 6 },
  downloadButtonText: { color: '#fff', textAlign: 'center' },
});

export default CertificatesScreen;
