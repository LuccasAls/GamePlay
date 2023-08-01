import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { SingIn } from '../screens/SingIn';
import { theme } from '../global/styles/theme';

const AppStack = createStackNavigator();

export function AuthRoutes() {
   return( 
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.color.secondary100,
                }
            }}
        > 
            <AppStack.Screen name='SingIn' component={SingIn}/>
            <AppStack.Screen name='Home' component={Home}/>
        </AppStack.Navigator>
   )
}