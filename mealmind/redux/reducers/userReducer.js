import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  weight: '0',
  nationality: '',
  weightUnit: 'kg',
  height: '',
  heightUnit: 'cm',
  weightwithUnit: '',
  heightwithUnit: '',
  selectedGoalType: '', //the goal type of the user, 3 different choces for now!
  goalDetails: '', //the details of the goal the user has set

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
      console.log('Updated name:', state.name);
    },
    setAge: (state, action) => {
      state.age = action.payload;
      console.log('Updated age:', state.age);
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
      state.weightwithUnit = state.weight + " "+ state.weightUnit;
      console.log('Updated weight:', state.weight);
      console.log('Updated weight with unit:', state.weightwithUnit);
    },
    setNationality: (state, action) => {
      state.nationality = action.payload;
      console.log('Updated nationality:', state.nationality);
    },
    setWeightUnit: (state, action) => {
      state.weightUnit = action.payload;
      console.log('Updated weight unit:', state.weightUnit);
    },
    setHeight: (state, action) => {
      state.height = action.payload;
      state.heightwithUnit = state.height + " " + state.heightUnit;
      console.log('Updated height:', state.height);
      console.log('Updated height with unit:', state.heightwithUnit);
    },
    setHeightUnit: (state, action) => {
      state.heightUnit = action.payload;
      console.log('Updated height unit:', state.heightUnit);
    },
    setSelectedGoal: (state, action) => {
      state.selectedGoalType = action.payload;
      console.log('Updated selected goal:', state.selectedGoalType);
    },
    setGoalDetails: (state, action) => {
      state.goalDetails = action.payload;
      console.log('Updated goal details:', state.goalDetails);
  },
  },
});

export const { setName, setAge, 
  setWeight, setNationality, setWeightUnit, setHeight, 
  setHeightUnit, setGoalDetails, setSelectedGoal} = userSlice.actions;
  
export default userSlice.reducer;