import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import MoreDetails from "../screens/MoreDetails";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitle: "Back to List"}}>
        <Stack.Screen
          name="Movies App"
          component={Tabs}
          options={{
            headerStyle: { backgroundColor: "#273646" },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Stack.Screen
          name="MoreDetails"
          component={MoreDetails}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
