import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const OnboardingScreen = ({ navigation }) => {
  // State variables
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(18); // Default age
  // const [weight, setWeight] = useState(60); // Default weight
  // const [height, setHeight] = useState(160); // Default height in cm
  // const [menuVxisible, setMenuVisible] = useState(false);

  // // Menu options for gender
  // const [gender, setGender] = useState('Select Gender');

  // return (
  //     <ScrollView contentContainerStyle={styles.container}>
  //       <Text style={styles.header}>Tell Us About Yourself</Text>

  //       {/* Name Input */}
  //       <TextInput
  //         label="Name"
  //         value={name}
  //         onChangeText={setName}
  //         mode="outlined"
  //         style={styles.input}
  //       />

  //       {/* Gender Picker */}
  //       <Menu
  //         visible={menuVisible}
  //         onDismiss={() => setMenuVisible(false)}
  //         anchor={
  //           <Button
  //             mode="outlined"
  //             onPress={() => setMenuVisible(true)}
  //             style={styles.input}>
  //             {gender}
  //           </Button>
  //         }>
  //         <Menu.Item onPress={() => setGender('Male')} title="Male" />
  //         <Menu.Item onPress={() => setGender('Female')} title="Female" />
  //         <Menu.Item onPress={() => setGender('Other')} title="Other" />
  //       </Menu>

  //       {/* Age Picker */}
  //       <View style={styles.pickerContainer}>
  //         <Text style={styles.label}>Age</Text>
  //         <Picker
  //           selectedValue={age}
  //           onValueChange={(value) => setAge(value)}
  //           style={styles.picker}>
  //           {Array.from({ length: 100 }, (_, i) => (
  //             <Picker.Item label={`${i + 1}`} value={i + 1} key={i} />
  //           ))}
  //         </Picker>
  //       </View>

  //       {/* Weight Picker */}
  //       <View style={styles.pickerContainer}>
  //         <Text style={styles.label}>Weight (kg)</Text>
  //         <Picker
  //           selectedValue={weight}
  //           onValueChange={(value) => setWeight(value)}
  //           style={styles.picker}>
  //           {Array.from({ length: 200 }, (_, i) => (
  //             <Picker.Item label={`${i + 1} kg`} value={i + 1} key={i} />
  //           ))}
  //         </Picker>
  //       </View>

  //       {/* Height Picker */}
  //       <View style={styles.pickerContainer}>
  //         <Text style={styles.label}>Height (cm)</Text>
  //         <Picker
  //           selectedValue={height}
  //           onValueChange={(value) => setHeight(value)}
  //           style={styles.picker}>
  //           {Array.from({ length: 250 }, (_, i) => (
  //             <Picker.Item label={`${i + 1} cm`} value={i + 1} key={i} />
  //           ))}
  //         </Picker>
  //       </View>

  //       {/* Submit Button */}
  //       <Button
  //         mode="contained"
  //         style={styles.submitButton}
  //         onPress={() => navigation.replace('MainApp')}>
  //         Submit
  //       </Button>
  //     </ScrollView>

 // );

   return (
    <View>
      <Text>Onboarding Screen</Text>
    </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
  },
  submitButton: {
    marginTop: 20,
  },
});

export default OnboardingScreen;
