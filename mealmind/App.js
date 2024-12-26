
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import OnboardingFlow from "./AppTabs";
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <OnboardingFlow />
        </NavigationContainer>
        </Provider>
    );
}

export default App;