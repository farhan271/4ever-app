import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const withdrawRequests = []; // Empty array to trigger "No Withdraw Requests" message
const withdrawHistory = [
  {
    id: '1',
    accountHolderName: 'Obaid Ullah',
    accountNumber: '03109376650',
    bankAccount: 'EasyPaisa',
    amount: '11000',
    requestDate: '12:54 08-09-2022',
    approveDate: '12:58 08-09-2022',
    status: 'Approved',
  },
  {
    id: '2',
    accountHolderName: 'Obaid Ullah',
    accountNumber: '03109376650',
    bankAccount: 'EasyPaisa',
    amount: '13700',
    requestDate: '09:53 24-09-2022',
    approveDate: '10:38 24-09-2022',
    status: 'Approved',
  },
];

const MyAccount = () => (
  <View style={styles.container}>
    {/* Header Info */}
    <View style={styles.headerContainer}>
      <View style={styles.headerBox}>
        <Ionicons name="cash-outline" size={24} color="#FF8B00" />
        <Text style={styles.headerTitle}>Active Payment</Text>
        <Text style={styles.headerAmount}>0 Rs</Text>
      </View>
      <View style={styles.headerBox}>
        <Ionicons name="wallet-outline" size={24} color="#FF8B00" />
        <Text style={styles.headerTitle}>Withdraw Limit</Text>
        <Text style={styles.headerAmount}>10000 Rs</Text>
      </View>
    </View>
    <View style={styles.lowAmountButton}>
      <Button title="Low Amount" color="#FF4D4D" onPress={() => {}} />
    </View>

    {/* Withdraw Requests */}
    <Text style={styles.sectionTitle}>Withdraw Requests</Text>
    <FlatList
      data={withdrawRequests}
      ListEmptyComponent={<Text style={styles.emptyText}>No Withdraw Requests</Text>}
      renderItem={({ item }) => <RequestItem item={item} />}
      keyExtractor={(item) => item.id}
    />

    {/* Withdraw History */}
    <Text style={styles.sectionTitle}>Withdraw History</Text>
    <FlatList
      data={withdrawHistory}
      renderItem={({ item }) => <WithdrawItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const RequestItem = ({ item }) => (
  <View style={styles.requestContainer}>
    <View style={styles.requestRow}>
      <Ionicons name="person-outline" size={20} color="#FF8B00" />
      <Text style={styles.requestLabel}>Account Holder Name:</Text>
      <Text style={styles.requestText}>{item.accountHolderName}</Text>
    </View>
    <View style={styles.requestRow}>
      <Ionicons name="call-outline" size={20} color="#FF8B00" />
      <Text style={styles.requestLabel}>Account Number:</Text>
      <Text style={styles.requestText}>{item.accountNumber}</Text>
    </View>
    <View style={styles.requestRow}>
      <Ionicons name="card-outline" size={20} color="#FF8B00" />
      <Text style={styles.requestLabel}>Bank Account:</Text>
      <Text style={styles.requestText}>{item.bankAccount}</Text>
    </View>
  </View>
);

const WithdrawItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemRow}>
      <Ionicons name="person-circle-outline" size={20} color="#FF8B00" />
      <Text style={styles.itemLabel}>Account Holder:</Text>
      <Text style={styles.itemText}>{item.accountHolderName}</Text>
    </View>
    <View style={styles.itemRow}>
      <Ionicons name="call-outline" size={20} color="#FF8B00" />
      <Text style={styles.itemLabel}>Account Number:</Text>
      <Text style={styles.itemText}>{item.accountNumber}</Text>
    </View>
    <View style={styles.itemRow}>
      <Ionicons name="card-outline" size={20} color="#FF8B00" />
      <Text style={styles.itemLabel}>Bank Account:</Text>
      <Text style={styles.itemText}>{item.bankAccount}</Text>
    </View>
    <View style={styles.itemRow}>
      <Ionicons name="cash-outline" size={20} color="#FF8B00" />
      <Text style={styles.itemLabel}>Amount:</Text>
      <Text style={styles.itemText}>{item.amount} Rs</Text>
    </View>
    <View style={styles.itemRow}>
      <Ionicons name="time-outline" size={20} color="#FF8B00" />
      <Text style={styles.itemLabel}>Requested:</Text>
      <Text style={styles.itemText}>{item.requestDate}</Text>
    </View>
    <View style={styles.itemRow}>
      <Ionicons name="checkmark-done-outline" size={20} color="#4CAF50" />
      <Text style={styles.itemLabel}>Approved:</Text>
      <Text style={styles.itemText}>{item.approveDate}</Text>
    </View>
    <View style={[styles.statusBadge, item.status === 'Approved' ? styles.approved : styles.pending]}>
      <Text style={styles.statusText}>{item.status}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF3E0', // Lightest shade of #FF8B00
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerBox: {
    flex: 1, // Equal size for both header boxes
    paddingVertical: 20,
    backgroundColor: '#FFE0B2', // Light orange background for header boxes
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5, // Spacing between header boxes
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 16,
    color: '#FF8B00', // Orange color for header title
    marginTop: 8,
  },
  headerAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF8B00', // Orange color for header amount
    marginTop: 5,
  },
  lowAmountButton: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FF8B00', // Orange color for section titles
    marginVertical: 10,
  },
  requestContainer: {
    backgroundColor: '#FFE0B2', // Light orange background for requests
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  requestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  requestLabel: {
    fontSize: 14,
    color: '#FF8B00', // Orange color for labels
    fontWeight: 'bold',
    marginLeft: 5,
  },
  requestText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  itemContainer: {
    backgroundColor: '#FFE0B2', // Light orange background for withdraw history
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF8B00', // Orange color for labels
    marginLeft: 5,
  },
  itemText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    marginVertical: 20,
  },
  statusBadge: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  approved: {
    backgroundColor: '#DFF2E1',
  },
  pending: {
    backgroundColor: '#FFE1E1',
  },
  statusText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default MyAccount;
