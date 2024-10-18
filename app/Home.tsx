import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from './ThemeContext'; // Importiere den ThemeContext
import ThemeStyles from './ThemeStyles'; // Importiere die Themenstile

const Home: React.FC = () => {
  const { theme } = useTheme();
  const styles = ThemeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

export default Home;
