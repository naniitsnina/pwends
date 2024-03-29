// import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const user = false
  return (
    <Stack.Navigator>
        {user ? (
            <>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Chat' component={ChatScreen} />            

            </>
        ) : (

            <Stack.Screen name='Login' component={LoginScreen}/>
        )
        }
    </Stack.Navigator>
  )
}

export default StackNavigator;