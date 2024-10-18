import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext'; // Importiere den ThemeContext
import ThemeStyles from './ThemeStyles'; // Importiere die Themenstile

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Hole das aktuelle Thema und die Toggle-Funktion
  const styles = ThemeStyles(theme); // Wende die Themenstile an

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>
          {theme === 'dark' ? 'Dark Mode' : 'White Mode'}
        </Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          style={styles.switch}
        />
      </View>
    </View>
  );
};

export default Settings;
