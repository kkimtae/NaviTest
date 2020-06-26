import * as React from "react";
import { View, Text, Button } from "react-native";

function PageOneScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Setting Page One</Text>
      <Button title="PageTwo" onPress={() => navigation.navigate("PageTwo")} />
    </View>
  );
}

export default PageOneScreen;
