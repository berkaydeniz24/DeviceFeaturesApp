import { View, Button, StyleSheet } from 'react-native'; // [cite: 111]

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Camera & Gallery" 
        onPress={() => navigation.navigate('Camera')} 
      />
      <Button 
        title="Location" 
        onPress={() => navigation.navigate('Location')} 
      />
    </View>
  ); // [cite: 112-118]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    padding: 20,
  }, // [cite: 119-127]
});