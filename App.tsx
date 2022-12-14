import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './theme';
import StackNavigator from './components/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <StackNavigator />
    </NavigationContainer>
  );
}