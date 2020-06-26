import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyNavigator from "./components/MyNavigator";

function App() {
  return (
    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
  );
}

export default App;
