import React, {Component} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticationScreen from './src/Screens/Authentication';
import FriendListScreen from './src/Screens/FriendList';
const Stack = createStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};
const Project = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Friends" component={FriendListScreen} />
          <Stack.Screen
            name="Authentication"
            component={AuthenticationScreen}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#6421b0',
              },
              headerTintColor: '#fff',
            }}
            theme={MyTheme}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Project;
