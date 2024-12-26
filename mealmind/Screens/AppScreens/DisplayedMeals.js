import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import PagerView from 'react-native-pager-view';

const DisplayedMeals = () => {
  const [selectedDay, setSelectedDay] = useState(''); // State to track the selected day
  const [selectedMeal, setSelectedMeal] = useState(0); // State to track the selected meal (breakfast, lunch, dinner)

  // Sample meals data
  const meals = {
    breakfast: 'Pancakes with syrup and fruit',
    lunch: 'Grilled chicken salad',
    dinner: 'Spaghetti with meatballs'
  };

  // Handler for day selection in the calendar
  const handleDayPress = (day) => {
    setSelectedDay(day.dateString);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* CalendarList component for selecting days */}
        <CalendarList
          horizontal
          pagingEnabled
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDay]: { selected: true, marked: true, selectedColor: 'blue' }
          }}
          theme={{
            selectedDayBackgroundColor: 'blue',
            selectedDayTextColor: 'white',
            todayTextColor: 'blue',
            dayTextColor: 'black',
            textDisabledColor: 'gray',
            dotColor: 'blue',
            selectedDotColor: 'white',
            arrowColor: 'blue',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
          }}
        />
        {/* PagerView component for switching between meals */}
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={(e) => setSelectedMeal(e.nativeEvent.position)}
        >
          <View key="1" style={styles.page}>
            <Text style={styles.mealType}>Breakfast</Text>
            <Text style={styles.meal}>{meals.breakfast}</Text>
          </View>
          <View key="2" style={styles.page}>
            <Text style={styles.mealType}>Lunch</Text>
            <Text style={styles.meal}>{meals.lunch}</Text>
          </View>
          <View key="3" style={styles.page}>
            <Text style={styles.mealType}>Dinner</Text>
            <Text style={styles.meal}>{meals.dinner}</Text>
          </View>
        </PagerView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  pagerView: {
    flex: 1,
    marginTop: 20,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealType: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meal: {
    fontSize: 18,
  },
});

export default DisplayedMeals;