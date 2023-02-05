import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesScreen from "../screens/MoviesScreen";
import SearchResults from "../screens/SearchResults";
import TVShowsScreen from "../screens/TVShowsScreen";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 16,
          },
          tabBarStyle: {
            backgroundColor: "d1d1d1",
          },
          tabBarActiveTintColor: "#273646",
          tabBarInactiveTintColor: "lightgrey",
          tabBarIndicatorStyle: {
            backgroundColor: "#273646",
            padding: 1.5,
            gap: 3,
          },
        }}
      >
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="Search Results" component={SearchResults} />
        <Tab.Screen name="TV Shows" component={TVShowsScreen} />
      </Tab.Navigator>
  );
};

export default Tabs;
