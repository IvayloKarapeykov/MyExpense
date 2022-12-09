import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories } from '../screens/Categories';
import { TabNavigator } from '../navigation/TabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Home'
            component={TabNavigator}
            options={{ headerShown: false }} 
        />
        <Stack.Screen name='Categories' component={Categories}/>
    </Stack.Navigator>
  );
}