import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const PaymentScreen = ({ navigation }) => {
  const [transactionId, setTransactionId] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleChooseFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'image/*',
    });
    if (result.type === 'success') {
      setScreenshot(result);
    }
  };

  const handleSubmit = () => {
    if (transactionId && screenshot) {
      Alert.alert('Success', 'Your transaction has been submitted!');
      // Add any further actions or API calls here
    } else {
      Alert.alert('Error', 'Please provide a transaction ID and upload a screenshot.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        YOU CAN DEPOSIT YOUR PAYMENT WHICH IS (3000) THROUGH SADAPAY OR BANK!
      </Text>
      <Text style={styles.infoText}>
        Allied Bank: PK56ABPA0010112257710018 - Muhammad Umar Sulaman{'\n'}
        Sada pay: 03197518917 - Muhammad Umar Sulaman
      </Text>
      <Text style={styles.instructions}>
        SEND PAYMENT AND THEN SEND TRANSACTION SCREENSHOT TO GIVEN BOX BELOW. YOUR ID WILL ACTIVATE IN NEXT 24 HOURS!
        AFTER ACTIVATION OF ACCOUNT YOU WILL SEE THE (PROCEED TO PROFILE) BUTTON BELOW, THEN YOU CAN CLICK ON IT!
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Add your Screenshot</Text>
        <TouchableOpacity style={styles.chooseFileButton} onPress={handleChooseFile}>
          <Text style={styles.chooseFileText}>
            {screenshot ? screenshot.name : 'Choose File'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Add Transaction ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChangeText={setTransactionId}
        />

        <Text style={styles.withdrawLimit}>Withdraw Limit: 10000</Text>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFF3E0', // Light orange background
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FF8B00',
      textAlign: 'center',
      marginBottom: 10,
    },
    infoText: {
      fontSize: 14,
      color: '#333',
      textAlign: 'center',
      marginBottom: 10,
    },
    instructions: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
      marginBottom: 20,
    },
    form: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },
    label: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#666',
      marginBottom: 5,
    },
    chooseFileButton: {
      backgroundColor: '#FF8B00', // Set to orange
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 15,
    },
    chooseFileText: {
      color: '#FFF', // Text color for contrast
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      color: '#333',
    },
    withdrawLimit: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FF8B00',
      textAlign: 'center',
      marginBottom: 20,
    },
    submitButton: {
      backgroundColor: '#FF8B00',
      paddingVertical: 12,
      borderRadius: 5,
      alignItems: 'center',
    },
    submitButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
  export default PaymentScreen;
  