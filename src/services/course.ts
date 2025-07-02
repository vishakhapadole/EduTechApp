import api from './api';

export const getFeaturedCourses = async () => {
  try {
    const response = await api.get('/courses/featured');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCourseDetails = async (courseId: string) => {
  try {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const enrollCourse = async (courseId: string) => {
  try {
    const response = await api.post(`/courses/${courseId}/enroll`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMyCourses = async () => {
  try {
    const response = await api.get('/courses/my-courses');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCourseProgress = async (courseId: string) => {
  try {
    const response = await api.get(`/courses/${courseId}/progress`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const completeLesson = async (courseId: string, lessonId: string) => {
  try {
    const response = await api.post(`/courses/${courseId}/lessons/${lessonId}/complete`);
    return response.data;
  } catch (error) {
    throw error;
  }
};