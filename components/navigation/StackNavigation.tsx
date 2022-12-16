import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Add } from '../../screens';
import { Categories } from '../../screens/Categories';
import { TabNavigator } from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: '' }}>
        <Stack.Screen 
            name='Home'
            component={TabNavigator}
            options={{ headerShown: false }} 
        />
        <Stack.Screen name='Categories' component={Categories} />
        <Stack.Screen name='Add' component={Add} />
    </Stack.Navigator>
  );
}