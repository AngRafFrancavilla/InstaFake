import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import Profilo from './screens/Profilo.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Create from './screens/Create.jsx';
import SessionProvider from "./context.js";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  const [logged, setLogged] = useState(true);

  function handleLogin() {
    setLogged(true);
  }

  function Tabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Profilo" component={Profilo} />
      </Tab.Navigator>
    );
  }

  return (
  <SessionProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {logged ? (
          <Stack.Screen name="Sito" component={Tabs} />
        ) : (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  </SessionProvider>
  );
} 