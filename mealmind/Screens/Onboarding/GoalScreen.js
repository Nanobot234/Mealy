import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, RadioButton } from 'react-native-paper';

const GoalScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState('lose_weight');
  const [goalDetails, setGoalDetails] = useState('');
  const [inputHeight, setInputHeight] = useState(100);
  const navigation = useNavigation();

  const getHelpText = (goal) => {
    switch (goal) {
      case 'lose_weight':
        return 'Please enter how much weight you want to lose and in how much time.\nExample: I want to lose 5kg in 2 months.';
      case 'manage_health':
        return 'Enter details about the health condition you want to manage.Also include the level of your condition and how it affects you currently\n\nExample: I have type 2 diabetes and it has a major impact on my life.';
      case 'improve_nutrition':
        return 'Enter details about how you want to improve your nutrition.\nExample: I want to eat more fruits and vegetables and less processed foods.';
      default:
        return '';
    }
  };

  
  return (

    // <KeyboardAvoidingView
    // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // style={{ flex: 1 }}
    // >
    <SafeAreaView style={styles.safeArea}>

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.navigationHeader}>What's your goal?</Text>
        <RadioButton.Group onValueChange={setSelectedGoal} value={selectedGoal}>
          <View>
            <RadioButton.Item label="Lose Weight" value="lose_weight" />
            <RadioButton.Item label="Manage Health" value="manage_health" />
            <RadioButton.Item label="Improve Nutrition" value="improve_nutrition" />
          </View>

        </RadioButton.Group>
      </View>
      <View style={styles.section}>
        <Text style={styles.helpText}>{getHelpText(selectedGoal)}</Text>
      </View>
      <View style={styles.section}>
        <TextInput
          style={[styles.textInput, {height: 150}]}
          placeholder="Enter details about your goal"
          multiline
          value={goalDetails}
          onChangeText={setGoalDetails}
          onContentSizeChange={(event) => {
            const newHeight = event.nativeEvent.contentSize.height;
                console.log('New input height:', newHeight);
                setInputHeight(newHeight);
          }}
        />
        {/* Voice rcongition here likely */}
        <Button
         mode="contained"
         style={styles.submitButton}
        // onPress={() => navigation.navigate('Goal')}>
        >
          Say It
        </Button>

        <Button
         mode="contained"
         style={styles.submitButton}
        // onPress={() => navigation.navigate('Goal')}>
        >
            Create Weekly Meal Plan
        </Button>




      </View>
    </ScrollView>
    </SafeAreaView>
    // </KeyboardAvoidingView>
  );
};

//see further things to add,. NEXTT!!


const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    },
  container: {
    flexGrow: 1,
    paddingTop: 50,
    padding:20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  navigationHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  helpText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'gray',
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 50,
  },
  voiceButton: {
    marginTop: 20,
  },
  textInput: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },
  
});

export default GoalScreen;
