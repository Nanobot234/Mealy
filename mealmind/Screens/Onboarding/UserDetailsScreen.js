import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = () => {
  //State variables
  const [name, setName] = useState('');
  const [wieghtUnit, setWeightUnit] = useState('kg');
  const [age, setAge] = useState(18); // Default age
  const [unit, setUnit] = useState('cm'); // Default unit is cm
  const [weight, setWeight] = useState(60); // Default weight
  const [height, setHeight] = useState(160); // Default height in cm
  const [natiionality, setNationality] = useState(''); //The users nationality, used to make foods thye will likely eat

  // Menu options for gender
  const [gender, setGender] = useState('Select Gender');

  const navigation = useNavigation();

  return (

    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
  >
    <SafeAreaView style={styles.safeArea}>
  <Provider>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Tell Us About Yourself</Text>

      {/* Name Input */}
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />

      {/* Age Picker */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Age(Years)</Text>
        <Picker
          selectedValue={age}
          onValueChange={(value) => setAge(value)}
          style={[styles.picker, Platform.OS === 'ios' && { backgroundColor: '#00000000' }]}>
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
        </Picker>
      </View>

      {/* Weight Picker */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Weight (kg)</Text>
        <View style={styles.rowContainer}>

          {/* Enter weight value */}
          <View style={{ height: 50, width: '50%' }}>
          <TextInput
            label="Weight"
            value={weight}
            onChangeText={(value) => setWeight(value)}
            mode="outlined"
            style={{ height: 50 }} 
            keyboardType='numeric'
            />
            </View>

        <Picker
          selectedValue={wieghtUnit}
          onValueChange={(value) => setWeightUnit(value)}
          style={[styles.picker, Platform.OS === 'ios' && { backgroundColor: '#00000000' }]}>
          {/* {Array.from({ length: 200 }, (_, i) => (
            <Picker.Item label={`${i + 1} kg`} value={i + 1} key={i} />
          ))} */}
          <Picker.Item label="kg" value="kg" />
          <Picker.Item label="lb" value="lb" />
        </Picker>
        </View>
      </View>

      <View style={{width: "100%"}}>
      <Text style={styles.label}>Height</Text>

      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'cm' ? styles.unitButtonSelected : null,
          ]}
          onPress={() => setUnit('cm')}
        >
          <Text style={unit === 'cm' ? styles.unitTextSelected : styles.unitText}>
            cm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'ft' ? styles.unitButtonSelected : null,
          ]}
          onPress={() => setUnit('ft')}
        >
          <Text style={unit === 'ft' ? styles.unitTextSelected : styles.unitText}>
            ft
          </Text>
        </TouchableOpacity>
      </View>



 {/* Height Input */}
 <TextInput
        style={styles.input}
        label={`Enter height in ${unit}`}
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      </View>

      {/* <View style={styles.container}> */}
      <TextInput
        style={styles.input}
        value={natiionality}
        label={"Which country are you from?"}
        mode='outlined'
        onChangeText={setNationality}
      />
      <Text style>This will help us find meals youll love to eat!</Text>
      {/* </View> */}

       {/* <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      /> */}

      {/* Submit Button */}
      <Button
        mode="contained"
        style={styles.submitButton}
        onPress={() => navigation.navigate('Goal')}>
        Submit
      </Button>


    </ScrollView>
  </Provider>
</SafeAreaView>
</KeyboardAvoidingView>

 );

  //  return (
  //   <View>
  //     <Text>Onboarding Screen</Text>
  //   </View>
  //  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexGrow: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    // backgroundColor: '#e0e0e0', // Light grey background
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20, // Space between pickers
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    width: '100%',
  },
  unitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  unitButtonSelected: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  unitText: {
    color: '#555',
  },
  unitTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  unitSelector: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5, // Space between label and picker
  },
  picker: {
    height: Platform.OS === 'ios' ? undefined : 50,
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor: '#ffff3f',
    borderRadius: Platform.OS === 'ios' ? 0 : 5,
  },
  submitButton: {
    marginTop: 20,
  },
});


export default OnboardingScreen;
