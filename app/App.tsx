import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BottomNavBar />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
