import { NavigationContainer } from '@react-navigation/native'; // [cite: 83]
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // [cite: 85]
import HomeScreen from './screens/HomeScreen'; // [cite: 86]
import CameraScreen from './screens/CameraScreen'; // [cite: 87]
import LocationScreen from './screens/LocationScreen'; // [cite: 88]

const Stack = createNativeStackNavigator(); // [cite: 89, 90]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ); // [cite: 91-101]
}