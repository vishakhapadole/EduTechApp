import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av';

const LessonViewerScreen = ({ route }) => {
  const { lesson } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      {lesson.type === 'video' && (
        <Video
          source={{ uri: lesson.videoUrl }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          useNativeControls
          style={styles.video}
        />
      )}
      {lesson.type === 'reading' && (
        <ScrollView style={styles.readingBox}>
          <Text style={styles.content}>{lesson.content}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  video: { width: '100%', height: 220, backgroundColor: '#000' },
  readingBox: { marginTop: 16 },
  content: { fontSize: 16, lineHeight: 22 },
});

export default LessonViewerScreen;
