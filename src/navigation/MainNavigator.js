import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import AuthContext from '../context/AuthContextBase';
import BottomTabNavigator from './BottomTabNavigator'; 
import CourseDetailScreen from '../screens/CourseDetailScreen';
import LessonViewerScreen from '../screens/LessonViewerScreen';
import CourseListScreen from '../screens/CourseListScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizResultScreen from '../screens/QuizResultScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CertificatesScreen from '../screens/CertificatesScreen';
import LiveClassScreen from '../screens/LiveClassScreen';
import InstructorDashboard from '../screens/InstructorDashboard';
import StudentDashboard from '../screens/StudentDashboard';
import OTPScreen from '../screens/OTPScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { user, role } = useContext(AuthContext);

  if (!user || !role) return <AuthNavigator />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen name="LessonViewer" component={LessonViewerScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="CourseList" component={CourseListScreen} />
      <Stack.Screen name="Certificates" component={CertificatesScreen} />
      <Stack.Screen name="QuizResult" component={QuizResultScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} /> 
      <Stack.Screen name="LiveClasses" component={LiveClassScreen} />
      <Stack.Screen name="InstructorDashboard" component={InstructorDashboard} />
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      <Stack.Screen name="OTP" component={OTPScreen} />
{user.role === 'student' && (
  <Stack.Screen name="Checkout" component={CheckoutScreen} />
)}

    </Stack.Navigator>
  );
};

export default MainNavigator;
