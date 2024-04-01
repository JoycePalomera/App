import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './Homepage';
import Login from './Login';
import Registration from './Registration';
import Recovery from './Recovery';
import Landing from './Landing';
import Dashboard from './dashboard';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="Recovery" component={Recovery} />
        <Drawer.Screen name="Landing" component={Landing} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    );
}

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "yellow",
      alignItems: "center",
      justifyContent: "center",
    },
});