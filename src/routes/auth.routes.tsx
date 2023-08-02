import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SingIn } from '../screens/SingIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate} from '../screens/AppointmentCreate';

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
            <AppStack.Screen name='AppointmentDetails' component={AppointmentDetails}/>
            <AppStack.Screen name='AppointmentCreate' component={AppointmentCreate}/>
        </AppStack.Navigator>
   )
}