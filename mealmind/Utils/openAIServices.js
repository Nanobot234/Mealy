import OpenAI from "openai";
import { OPENAI_API_KEY } from "./config.js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Meal from "../Models/Meal.js";

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function generateText(age, nationality, weightwithUnit, heightwithUnit, selectedGoalType, goalDetails) {
  const mealsListPrompt = `Please make a weekly meal plan for me based on my body factors and health info. 
  I am ${age} years old, ${heightwithUnit} tall and weigh ${weightwithUnit}. 
  I want to reach a goal which is to ${selectedGoalType}. 
  The following are details about my goal: ${goalDetails}. 
  Lastly, when creating meals for me, please consider that I am ${nationality}.
  Return the response in JSON where each day of the week has a list of meals objects for breakfast, lunch, and dinner. 
  Each meal object should have an id, a name, an imageUrl, a description, the number of calories of the food, and a clear statement of how it's related to my goal.
  You can search the web for the images.`;

  console.log('Meals prompt:',mealsListPrompt); // Log the prompt to the console
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: mealsListPrompt }],
      model: "gpt-4o",
    });


    const responseText = completion.choices[0].message.content;
    console.log("Content:",completion.choices[0].message.content); // Log the generated text to the console

    const jsonString = extractJSON(responseText);
    const mealsList = JSON.parse(jsonString);

    return mealsList; // Return the generated text
  } catch (error) {
    console.error("Error generating text:", error);
    throw error; // Re-throw the error after logging it
  }
}

function extractJSON(responseText) {
  const jsonStart = responseText.indexOf('{');
  const jsonEnd = responseText.lastIndexOf('}') + 1;
  const jsonString = responseText.substring(jsonStart, jsonEnd);
  return jsonString;
}

function parseMealsData(mealsJSON) {
  const mealsData = {};
    for (const day in mealsJSON) {
      mealsData[day] = {};
      for (const mealType in mealsJSON[day]) {
        const meal = mealsJSON[day][mealType];
        mealsData[day][mealType] = new Meal(meal.id, meal.name, meal.imageURL, meal.description, meal.calories, meal.goalRelation);
      }
    }

    //continue here to test it out!
}

export { generateText };