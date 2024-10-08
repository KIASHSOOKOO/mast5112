import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Action</Text>
      <Button title="Edit a Dish" onPress={() => navigation.navigate('EditDish')} color="#f0a500" />
      <Button title="Add a Dish" onPress={() => navigation.navigate('AddDish')} color="#f0a500" />
    </View>
  );
};

const AddDishScreen = ({ navigation }) => {
  const [dishType, setDishType] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Items</Text>
      <TextInput
        placeholder="Dish Type (Starter, Main, Dessert)"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={dishType}
        onChangeText={setDishType}
      />
      <TextInput
        placeholder="Dish Name"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        placeholder="Dish Description"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={dishDescription}
        onChangeText={setDishDescription}
      />
      <TextInput
        placeholder="Dish Price"
        style={styles.input}
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={dishPrice}
        onChangeText={setDishPrice}
      />
      <View style={styles.buttonRow}>
        <Button title="Back" onPress={() => navigation.goBack()} color="#333" />
        <Button title="Accept" onPress={() => alert('Dish Added!')} color="#f0a500" />
      </View>
    </View>
  );
};

const EditDishScreen = ({ navigation }) => {
  const [dishType, setDishType] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Items</Text>
      <TextInput
        placeholder="Dish Type (Starter, Main, Dessert)"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={dishType}
        onChangeText={setDishType}
      />
      <TextInput
        placeholder="Dish Name"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        placeholder="Dish Description"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={dishDescription}
        onChangeText={setDishDescription}
      />
      <TextInput
        placeholder="Dish Price"
        style={styles.input}
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={dishPrice}
        onChangeText={setDishPrice}
      />
      <View style={styles.buttonRow}>
        <Button title="Back" onPress={() => navigation.goBack()} color="#333" />
        <Button title="Accept" onPress={() => alert('Dish Edited!')} color="#f0a500" />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDish" component={AddDishScreen} />
        <Stack.Screen name="EditDish" component={EditDishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Custom styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1b1b1b', 
  },
  title: {
    fontSize: 24,
    color: '#f0a500', // Gold color
    fontFamily: 'Arial', 
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#333', 
    color: '#fff', 
    borderRadius: 5,
    fontFamily: 'Arial', 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
