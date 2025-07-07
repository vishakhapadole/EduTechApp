import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizResultScreen = ({ route, navigation }) => {
  const score = 8;
  const total = 10;
  const courseTitle = "Sample Course";

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Your Score: {score} / {total}</Text>
      <Text style={styles.text}>🎉 Congratulations on completing {courseTitle}!</Text>
      <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.button}>
        <Text style={styles.buttonText}>Back to Courses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  score: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18 },
  button: { marginTop: 30, padding: 14, backgroundColor: '#4f46e5', borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default QuizResultScreen;
