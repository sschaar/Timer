import { StyleSheet } from 'react-native';

const ThemeStyles = (theme: 'light' | 'dark') => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#2e343b' : '#fff', // Change this hex code for dark mode
    },
    text: {
      fontSize: 18,
      color: theme === 'dark' ? '#fff' : '#000',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    switch: {
      marginLeft: 20,
      transform: [{ scale: 1.5 }],
    },
  });
};

export default ThemeStyles;
