import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, RadioButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { setGoal, setGoalDetails, setSelectedGoal } from '../../redux/reducers/userReducer';
import { generateText } from '../../Utils/openAIServices';

const GoalScreen = () => {
  const [inputHeight, setInputHeight] = useState(100); //used for ui Display
  const navigation = useNavigation(); //used to navigate between screens
  const dispatch = useDispatch(); //used to dispatch actions to the store
  const [localGoalType, setLocalGoalType] = useState('lose weight'); //used to store the goal type
  const [localGoalDetails, setLocalGoalDetails] = useState(''); //used to store the goal details



  const { age,selectedGoalType, goalDetails, weightwithUnit, nationality,heightwithUnit} = useSelector(state => state.user);


  // submit fucntion to run when the user submits the form
  const saveToStoreAndNavigate = async () => {
    dispatch(setSelectedGoal(localGoalType));
    dispatch(setGoalDetails(localGoalDetails));

    try {
      console.log('selected goal type:', selectedGoalType);
      const text = await generateText(age,nationality, weightwithUnit, heightwithUnit, localGoalType, localGoalDetails);
     console.log('Data:', text);
    } catch (error) {
      console.error('Error generating text:', error);
    }

    navigation.navigate('UserMealPlan');
  };


  const getHelpText = (goal) => {
    switch (goal) {
      case 'lose weight':
        return 'Please enter how much weight you want to lose and in how much time.\nExample: I want to lose 5kg in 2 months.';
      case 'manage a health condition':
        return 'Enter details about the health condition you want to manage.Also include the level of your condition and how it affects you currently\n\nExample: I have type 2 diabetes and it has a major impact on my life.';
      case 'improve my nutrition':
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
        <RadioButton.Group onValueChange={(value) => setLocalGoalType(value)} value={localGoalType}>
          <View>
            <RadioButton.Item label="Lose Weight" value="lose weight" />
            <RadioButton.Item label="Manage Health" value="manage a health condition" />
            <RadioButton.Item label="Improve Nutrition" value="improve my nutrition" />
          </View>

        </RadioButton.Group>
      </View>
      <View style={styles.section}>
        <Text style={styles.helpText}>{getHelpText(localGoalType)}</Text>
      </View>
      <View style={styles.section}>
        <TextInput
          style={[styles.textInput, {height: 150}]}
          placeholder="Enter details about your goal"
          multiline
          onChangeText={(text) => setLocalGoalDetails(text)}
          value={localGoalDetails}
          // onBlur={dispatch(setGoalDetails(goalDetails))}
          
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
         onPress={saveToStoreAndNavigate}>
        
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
