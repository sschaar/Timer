import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Camera from './Camera';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from './ThemeContext'; // Importiere den ThemeContext

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  const { theme } = useTheme(); // Hole das aktuelle Thema

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Camera') {
            iconName = 'camera';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else {
            iconName = 'home'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme === 'dark' ? '#fff' : 'black', // Active tint color based on theme
        tabBarInactiveTintColor: theme === 'dark' ? '#bbb' : 'gray', // Inactive tint color based on theme
        tabBarStyle: {
          height: 70, // Adjust height of the tab bar
          borderTopLeftRadius: 50, // Round top left corner
          borderTopRightRadius: 50, // Round top right corner
          borderBottomLeftRadius: 50, // Round bottom left corner
          borderBottomRightRadius: 50, // Round bottom right corner
          overflow: 'hidden', // Prevents content from overflowing
          position: 'absolute', // Ensures it stays on top
          paddingHorizontal: 20, // Add horizontal padding
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          backgroundColor: theme === 'dark' ? '#202225' : '#fff', // Background color based on theme
        },
        tabBarLabelStyle: {
          fontSize: 14, // Optionally adjust label font size
          marginTop: -10, // Move the label closer to the icon
          paddingBottom: 10, // Add padding if needed
        },
      })}
    >
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
