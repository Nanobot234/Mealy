 import * as React from "react" //importing all the components from react
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDetailScreen from "./Screens/Onboarding/UserDetailsScreen";
import GoalScreen from "./Screens/Onboarding/GoalScreen";

const OnboardingStack = createNativeStackNavigator();
const AppTabs = createBottomTabNavigator();

const OnboardingFlow = () => {
    return (
        <OnboardingStack.Navigator screenOptions={{headerShown: true, headerTitle: ""}} initialRouteName="EnterYourDetail">
        {/* <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} /> */}
         <OnboardingStack.Screen name="EnterYourDetail" component={UserDetailScreen} options={{headerShown: false}}/>
         <OnboardingStack.Screen name="Goal" component={GoalScreen} options={{}}/>
        </OnboardingStack.Navigator>
    );
    }

export default OnboardingFlow;


const AppTabNavigation = () => {
    return (
        <AppTabs.Navigator screenOptions={{headerShown: false}}>
        <AppTabs.Screen name="Onb" component={HomeScreen} />
        <AppTabs.Screen name="Profile" component={ProfileScreen} />
        </AppTabs.Navigator>
    );
    }