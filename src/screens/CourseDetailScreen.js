import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AuthContextBase from '../context/AuthContextBase';

const sampleEnroll = async () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params;
  const { user } = useContext(AuthContextBase);

  const handleEnroll = async () => {
    await sampleEnroll();
    alert('Enrolled successfully!');
  };

  const handleEnrollmentPress = () => {
    if (course.price > 0) {
      navigation.navigate('Checkout', { course });
    } else {
      handleEnroll();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: course.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.instructor}>Instructor: {course.instructor}</Text>
      <Text style={styles.description}>{course.description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEnrollmentPress}>
        <Text style={styles.buttonText}>
          {course.price > 0 ? `Buy ₹${course.price}` : 'Enroll Free'}
        </Text>
      </TouchableOpacity>

      {course.lessons?.length > 0 && (
        <FlatList
          data={course.lessons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('LessonViewer', { lesson: item })}
              style={{ padding: 12, backgroundColor: '#f1f5f9', marginBottom: 8, borderRadius: 6 }}
            >
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: '#666' }}>{item.type.toUpperCase()}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  image: { height: 180, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold' },
  instructor: { fontSize: 16, color: '#888', marginBottom: 8 },
  description: { fontSize: 15, marginBottom: 16 },
  button: { backgroundColor: '#4f46e5', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default CourseDetailScreen;
