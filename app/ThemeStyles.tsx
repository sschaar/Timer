import { StyleSheet } from 'react-native';

const ThemeStyles = (theme: 'light' | 'dark') => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#2e343b' : '#fff',
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
    camera: {
      flex: 1,
    },
    cameraContainer: {
      flex: 1,
    },
    button: {
      position: 'absolute',
      bottom: 120,
      right: 40,
      width: 70,
      height: 70,
      backgroundColor: '#0088FF',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });
};

export default ThemeStyles;
