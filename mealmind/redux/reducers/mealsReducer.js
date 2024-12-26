import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mealsData: {}
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setMealsData: (state, action) => {
      state.mealsData = action.payload;
    },
    addMeal: (state, action) => {
      const { day, mealType, meal } = action.payload;
      if (!state.mealsData[day]) {
        state.mealsData[day] = {};
      }
      state.mealsData[day][mealType] = meal;
    },
    removeMeal: (state, action) => {
      const { day, mealType } = action.payload;
      if (state.mealsData[day]) {
        delete state.mealsData[day][mealType];
      }
    }
  }
});

export const { setMealsData, addMeal, removeMeal } = mealsSlice.actions;
export default mealsSlice.reducer;