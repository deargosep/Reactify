import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomePage from '../Pages/Home/Home';
import StartPage from '../Pages/Start/Start';

export default function Navigation({initialRouteName}) {
    return <Stack.Navigator initialRouteName={initialRouteName} headerMode='none'>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Start" component={StartPage} />
    </Stack.Navigator>
}