import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Login from '../pages/Login';

import CreateAccount from '../pages/CreateAccount/step0';
import ConfirmationCodeCreateAccount from '../pages/CreateAccount/step1';
import InformationUser from '../pages/CreateAccount/step2';

import RecoveryAccount from '../pages/RecoveryPassword/step0';
import ConfirmationCodeRecoveryPassword from '../pages/RecoveryPassword/step1';
import ChangerPassword from '../pages/RecoveryPassword/step2';

import Map from '../pages/Map/index';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen
          name="ConfirmationCode"
          component={ConfirmationCodeCreateAccount}
        />
        <Stack.Screen name="InformationUser" component={InformationUser} />

        <Stack.Screen name="RecoveryAccount" component={RecoveryAccount} />
        <Stack.Screen
          name="ConfirmationCodeRecoveryPassword"
          component={ConfirmationCodeRecoveryPassword}
        />
        <Stack.Screen name="ChangerPassword" component={ChangerPassword} />

        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
