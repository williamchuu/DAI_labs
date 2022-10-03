import { Provider as PaperProvider } from 'react-native-paper';
import Main from './screens/main';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { LoginBtn, HomeScreen } from './comps/form';
import { InputField } from './comps/inputfield';
import { DatepickerSimple } from './comps/datepicker';
import { Button, View, Text } from 'react-native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
  // const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <PaperProvider>
          <InputField />
          <LoginBtn />
          <DatepickerSimple />
        </PaperProvider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

{/* <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator>
</NavigationContainer> */}