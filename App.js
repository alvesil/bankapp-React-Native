import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import TouchScreen from "./src/screens/TouchScreen";
import PinScreen from "./src/screens/PinScreen";
import SendRequestScreen from "./src/screens/SendRequestScreen";
import CardsScreen from "./src/screens/CardsScreen";

export default function App() {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarsOptions = {
    showLabel: true,
    style: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
      paddingBottom: 32,
    }
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282";
      const size = 24;

      switch (route.name) {
        case "Cards":
          icon = "credit-card";
          break;
        case "SendRequest":
          icon = "attach-money";
          break;
        default:
          icon = "dashboard";
      }
      return <MaterialIcons name={icon} size={size} color={color} />
    }
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator tabBarsOptions={tabBarsOptions} screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={ HomeScreen } options={{ headerShown: false, title: "Saldo e Extrato" }} />
        <TabStack.Screen 
          name="SendRequest" 
          component={SendRequestScreen} 
          options={{headerShown: false, title: "Transferências"}}
        />
        <TabStack.Screen name="Cards" component={CardsScreen} options={{ headerShown: false, title: "Cartões"}} />
      </TabStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
