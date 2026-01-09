import { View, Button, Image, Alert, StyleSheet } from 'react-native'; // [cite: 137]
import * as ImagePicker from 'expo-image-picker'; // [cite: 140]
import * as Haptics from 'expo-haptics'; // [cite: 141]
import { useState } from 'react'; // [cite: 142]

export default function CameraScreen() {
  const [imageUri, setImageUri] = useState(null); // [cite: 144, 148]

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(); // [cite: 147, 149]
    if (status !== 'granted') {
      Alert.alert('Permission required'); // [cite: 151]
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync(); // [cite: 154]
    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // [cite: 155]
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // [cite: 156]
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync(); // [cite: 161, 163]
    if (status !== 'granted') {
      Alert.alert('Camera permission required'); // [cite: 166]
      return;
    }

    const result = await ImagePicker.launchCameraAsync(); // [cite: 169]
    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // [cite: 171]
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); // [cite: 172]
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick from Gallery" onPress={pickImage} />
      <Button title="Take Photo" onPress={takePhoto} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  ); // [cite: 175-183]
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, padding: 20 },
  image: { width: '100%', height: 300, marginTop: 20 },
}); // [cite: 184-196]