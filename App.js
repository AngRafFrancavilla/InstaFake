// App.jsx
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profilo from "./screens/Profilo";
import Create from "./screens/Create";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SessionProvider from "./context";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [logged, setLogged] = useState(true);

  const Tabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profilo" component={Profilo} />
    </Tab.Navigator>
  );

  return (
    <SessionProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {logged ? (
              <Stack.Screen name="Sito" component={Tabs} />
            ) : (
              <Stack.Screen name="Login" component={Login} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
