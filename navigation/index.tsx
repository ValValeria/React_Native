import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, Text } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import { RootStackParamList } from '../types';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';
import HeaderComponent from '../components/HeaderComponent';
import AboutUsScreen from '../screens/AboutUsScreen';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={
        ({ navigation }) => ({
          header(){
            return <HeaderComponent navigation={navigation}/>;
          }
        })
      }
      >
      <Stack.Screen name="Home" component={TabOneScreen} options={{ title: "Home" }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
      <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Post' }} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ title: 'About Us' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
