import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AuthContext from '../context/AuthContextBase';

const CheckoutScreen = ({ route, navigation }) => {
    const { course } = route.params;
    const { user } = useContext(AuthContext);

    const handlePayment = async () => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; 
            if (isSuccess) {
                Alert.alert('Success', 'Payment successful and enrolled!');
                navigation.navigate('Courses');
            } else {
                Alert.alert('Payment Failed', 'Something went wrong. Please try again.');
            }
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.price}>₹{course.price}</Text>
            <TouchableOpacity onPress={handlePayment} style={styles.button}>
                <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, justifyContent: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    price: { fontSize: 20, color: '#333', marginBottom: 20 },
    button: { backgroundColor: '#4f46e5', padding: 16, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default CheckoutScreen;
