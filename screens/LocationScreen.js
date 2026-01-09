import { View, Text, Button, Alert, StyleSheet } from 'react-native'; // [cite: 205]
import * as Location from 'expo-location'; // [cite: 206]
import * as Notifications from 'expo-notifications'; // [cite: 209]
import { useState } from 'react'; // [cite: 210]

export default function LocationScreen() {
  const [coords, setCoords] = useState(null); // [cite: 212, 215]

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync(); // [cite: 217, 218]
    if (status !== 'granted') {
      Alert.alert('Location permission required'); // [cite: 221]
      return;
    }

    const location = await Location.getCurrentPositionAsync({}); // [cite: 223]
    setCoords(location.coords); // [cite: 224]

    await Notifications.requestPermissionsAsync(); // [cite: 225]
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Location Retrieved',
        body: 'Your GPS location was successfully fetched.',
      },
      trigger: null,
    }); // [cite: 226-231]
  };

  return (
    <View style={styles.container}>
      <Button title="Get Current Location" onPress={getLocation} />
      {coords && (
        <Text style={styles.text}>
          Lat: {coords.latitude} {"\n"}
          Lng: {coords.longitude}
        </Text>
      )}
    </View>
  ); // [cite: 232-242]
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, padding: 20 },
  text: { marginTop: 20, fontSize: 16 },
}); // [cite: 243-250]