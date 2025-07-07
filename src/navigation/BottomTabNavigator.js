import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from '../screens/CourseListScreen';
import LiveClassScreen from '../screens/LiveClassScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CertificatesScreen from '../screens/CertificatesScreen';
import StudentDashboard from '../screens/StudentDashboard';
import InstructorDashboard from '../screens/InstructorDashboard';
import AuthContext from '../context/AuthContextBase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { role } = useContext(AuthContext);

  const DashboardScreen = role === 'Instructor'
    ? InstructorDashboard
    : StudentDashboard;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let icon;
          switch (route.name) {
          case 'Dashboard': icon = 'account-outline'; break;
          case 'Courses': icon = 'book-open-variant'; break;
          case 'Live': icon = 'video-outline'; break;
          case 'Certificates': icon = 'certificate-outline'; break;
          case 'Settings': icon = 'cog-outline'; break;
          }
          return <MaterialCommunityIcons name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4f46e5',
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Courses" component={CourseListScreen} />
      <Tab.Screen name="Live" component={LiveClassScreen} />
      <Tab.Screen name="Certificates" component={CertificatesScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
