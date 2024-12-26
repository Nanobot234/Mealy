import React, { useState } from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import MealItem from '../../CustomComponents/MealItem';
import { useNavigation } from '@react-navigation/native';


const MealPlanScreen = () => {

 const mealsData = {
        Monday: [
          { id: '1', imageUrl: 'https://example.com/image1.jpg', foodName: 'Pancakes', description: 'Fluffy pancakes', calories: 350 },
          { id: '2', imageUrl: 'https://example.com/image2.jpg', foodName: 'Salad', description: 'Fresh garden salad', calories: 150 },
        ],
        Tuesday: [
          { id: '3', imageUrl: 'https://example.com/image3.jpg', foodName: 'Omelette', description: 'Cheese omelette', calories: 250 },
          { id: '4', imageUrl: 'https://example.com/image4.jpg', foodName: 'Soup', description: 'Tomato soup', calories: 200 },
        ],
        Wednesday: [
            { id: '5', imageUrl: 'https://example.com/image3.jpg', foodName: 'Omelet', description: 'Cheese omelette', calories: 250 },
            { id: '6', imageUrl: 'https://example.com/image4.jpg', foodName: 'Soup', description: 'Tomato soup', calories: 200 },
          ],
        // Add meals for other days...
      };

  const navigation = useNavigation();
    
  const [selectedDay, setSelectedDay] = useState('Monday');


  const renderMealItem = ({ item }) => (
    <MealItem
      imageUrl={item.imageUrl}
      foodName={item.foodName}
      description={item.description}
      calories={item.calories}
    />
  );

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Your Weekly Meal Plan</Text>

        <Text style={styles.label}>Your goal</Text>
      <View style={styles.buttonContainer}>
        {Object.keys(mealsData).map(day => (

            <TouchableOpacity key={day} style={styles.dayButton} onPress={() => setSelectedDay(day)}>
            <Text style={styles.dayButtonText}>{day}</Text>
                </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={mealsData[selectedDay]}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    dayButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal: 5,
      },
    dayButtonText: {
        color: '#fff',
        fontSize: 16,
      },
});

export default MealPlanScreen;