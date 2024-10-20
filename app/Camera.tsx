import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; // Importiere den ThemeContext
import ThemeStyles from './ThemeStyles'; // Importiere die Themenstile
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const CameraScreen: React.FC = () => {
  const { theme } = useTheme();
  const styles = ThemeStyles(theme);

  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState<CameraType>("back");

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.cameraContainer}>
      <CameraView style={styles.camera} facing={type}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.buttonText}>Flip</Text>
          </TouchableOpacity>
      </CameraView>
    </View>
  );
};

export default CameraScreen;
