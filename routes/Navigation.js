import React from "react";
import { DrawerContent } from "../screens/components/Drawer";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPassScreen from "../screens/ForgotPassScreen";
import FeedScreen from "../screens/FeedScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import SearchScreen from "../screens/SearchScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{
    
    return (
      <Drawer.Navigator initialRouteName="Feed" drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Js." component={FeedScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Appointments" component={AppointmentScreen} />
      </Drawer.Navigator>
    );
  }

const Navigator=()=>{
    return(
        <Stack.Navigator
            initialRouteName="Signup">
            <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Log In', headerTitleAlign: 'center'}}  />
            <Stack.Screen name="Signup" component={SignupScreen} options={{title: 'Sign Up', headerTitleAlign: 'center'}}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassScreen} />
            <Stack.Screen name="Feed" component={DrawerNavigator} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Navigator;