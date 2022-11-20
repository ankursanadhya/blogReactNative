import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

function App() {
  return (  
    // we are passing app as a child to the provider
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="IndexScreen" component={IndexScreen} />
          <Stack.Screen name="ShowScreen" component={ShowScreen} />
          <Stack.Screen name="CreateScreen" component={CreateScreen} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
