import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PageOneScreen from "../screens/PageOneScreen";
import PageTwoScreen from "../screens/PageTwoScreen";
import ModalScreen from "../screens/ModalScreen";

const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function SettingScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="PageOne" component={PageOneScreen} />
      <Stack.Screen name="PageTwo" component={PageTwoScreen} />
    </Stack.Navigator>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function MyNavigator() {
  return (
    <RootStack.Navigator mode="modal" initialRouteName="Tab">
      <RootStack.Screen
        name="Tab"
        component={TabScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Modal" component={ModalScreen} />
    </RootStack.Navigator>
  );
}

export default MyNavigator;
