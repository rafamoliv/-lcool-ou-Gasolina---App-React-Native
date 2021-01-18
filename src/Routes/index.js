import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../../src/pages/Landing";
import Results from "../../src/pages/Results";

const { Navigator, Screen } = createStackNavigator();

// Exports all routes
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Landing" component={Landing} />
        <Screen name="Results" component={Results} />
      </Navigator>
    </NavigationContainer>
  );
}
