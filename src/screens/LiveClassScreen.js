import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const LiveClasses = [
  {
    id: '1',
    title: 'Intro to Python',
    instructor: 'Dr. Meena Gupta',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 3600 },
    meetingLink: 'https://meet.example.com/python',
  },
  {
    id: '2',
    title: 'JavaScript for Beginners',
    instructor: 'Ravi Kapoor',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 7200 },
    meetingLink: 'https://meet.example.com/javascript',
  },
  {
    id: '3',
    title: 'React Native UI Workshop',
    instructor: 'Ananya Mehta',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 10800 },
    meetingLink: 'https://meet.example.com/react-native',
  },
  {
    id: '4',
    title: 'DevOps & CI/CD Pipelines',
    instructor: 'Priya Sharma',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 14400 },
    meetingLink: 'https://meet.example.com/devops',
  },
  {
    id: '5',
    title: 'Cloud Computing with AWS',
    instructor: 'Amit Verma',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 18000 },
    meetingLink: 'https://meet.example.com/aws',
  },
  {
    id: '6',
    title: 'Cybersecurity Fundamentals',
    instructor: 'Dr. Renu Desai',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 21600 },
    meetingLink: 'https://meet.example.com/cybersecurity',
  },
  {
    id: '7',
    title: 'Data Structures in Java',
    instructor: 'Rahul Iyer',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 25200 },
    meetingLink: 'https://meet.example.com/java-ds',
  },
  {
    id: '8',
    title: 'UI/UX Design Essentials',
    instructor: 'Sneha Kulkarni',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 28800 },
    meetingLink: 'https://meet.example.com/uiux',
  },
  {
    id: '9',
    title: 'Intro to Artificial Intelligence',
    instructor: 'Dr. Neha Sharma',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 32400 },
    meetingLink: 'https://meet.example.com/ai',
  },
  {
    id: '10',
    title: 'Full-Stack Web Development',
    instructor: 'Siddharth Malhotra',
    datetime: { seconds: Math.floor(Date.now() / 1000) + 36000 },
    meetingLink: 'https://meet.example.com/fullstack',
  },
];

const LiveClassScreen = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses(LiveClasses);
  }, []);

  const openMeeting = (url) => Linking.openURL(url);

  const renderItem = ({ item }) => {
    const date = new Date(item.datetime.seconds * 1000).toLocaleString();

    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.instructor}>Instructor: {item.instructor}</Text>
        <Text style={styles.time}>Starts on: {date}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => openMeeting(item.meetingLink)}
        >
          <MaterialIcons name="video-call" size={20} color="#fff" />
          <Text style={styles.buttonText}>Join Class</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={classes}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f6fc',
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  time: {
    fontSize: 13,
    color: '#3b82f6',
    marginBottom: 12,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LiveClassScreen;
