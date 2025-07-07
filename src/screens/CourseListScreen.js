import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const sampleCourses = [
  {
    id: '1',
    title: 'Introduction to Artificial Intelligence',
    instructor: 'Dr. Alan Turing',
    thumbnail: 'https://img.youtube.com/vi/2ePf9rue1Ao/hqdefault.jpg',
  },
  {
    id: '2',
    title: 'JavaScript Essentials',
    instructor: 'Brendan Eich',
    thumbnail: 'https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg',
  },
  {
    id: '3',
    title: 'React Native for Beginners',
    instructor: 'Sophia Williams',
    thumbnail: 'https://img.youtube.com/vi/0-S5a0eXPoc/hqdefault.jpg',
  },
  {
    id: '4',
    title: 'Kubernetes Crash Course',
    instructor: 'TechWorld with Nana',
    thumbnail: 'https://img.youtube.com/vi/s_o8dwzRlu4/hqdefault.jpg',
  },
  {
    id: '5',
    title: 'Data Structures & Algorithms',
    instructor: 'Grace Hopper',
    thumbnail: 'https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg',
  },
  {
    id: '6',
    title: 'Machine Learning Basics',
    instructor: 'Andrew Ng',
    thumbnail: 'https://img.youtube.com/vi/GwIo3gDZCVQ/hqdefault.jpg',
  },
  {
    id: '7',
    title: 'Full Stack Web Development',
    instructor: 'Mark Zuckerberg',
    thumbnail: 'https://img.youtube.com/vi/Ukg_U3CnJWI/hqdefault.jpg',
  },
  {
    id: '8',
    title: 'Clean Code & Software Craftsmanship',
    instructor: 'Robert C. Martin (Uncle Bob)',
    thumbnail: 'https://img.youtube.com/vi/7EmboKQH8lM/hqdefault.jpg',
  },
  {
    id: '9',
    title: 'Git & GitHub Masterclass',
    instructor: 'Academind',
    thumbnail: 'https://img.youtube.com/vi/RGOj5yH7evk/hqdefault.jpg',
  },
  {
    id: '10',
    title: 'Docker for Beginners',
    instructor: 'TechWorld with Nana',
    thumbnail: 'https://img.youtube.com/vi/3c-iBn73dDE/hqdefault.jpg',
  },
];

const CourseListScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(sampleCourses);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CourseDetail', { course: item })}
      style={styles.card}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.instructor}>By {item.instructor}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={courses}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    width: screenWidth - 24,
    alignSelf: 'center',
  },
  thumbnail: {
    width: '100%',
    height: 180,
    backgroundColor: '#ccc',
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 13,
    color: '#555',
  },
});

export default CourseListScreen;
