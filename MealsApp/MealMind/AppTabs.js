 import * as React from "react" //importing all the components from react
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDetailScreen from "./Screens/UserDetailsScreen";

const OnboardingStack = createNativeStackNavigator();
const AppTabs = createBottomTabNavigator();

const OnboardingFlow = () => {
    return (
        <OnboardingStack.Navigator>
        {/* <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} /> */}
         <OnboardingStack.Screen name="EnterYourDetail" component={UserDetailScreen} />
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