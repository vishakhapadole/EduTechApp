// src/navigation/AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OTPScreen from '../screens/OTPScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizResultScreen from '../screens/QuizResultScreen';
import InstructorDashboard from '../screens/InstructorDashboard';
import StudentDashboard from '../screens/StudentDashboard';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="OTP" component={OTPScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="QuizScreen" component={QuizScreen} />
    <Stack.Screen name="QuizResult" component={QuizResultScreen} /> 
    <Stack.Screen name="InstructorDashboard" component={InstructorDashboard} />
    <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
  </Stack.Navigator>
);

export default AuthNavigator;
