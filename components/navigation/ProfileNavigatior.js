import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/Profile';
import Test from './screens/Test'; 

const Stack = createStackNavigator()

export default function ProfileNavigatior() {
    return (
        <Stack.Navigator screenOptions={{headerTransparent: true}}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
    )
}
