import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Expenses, Reports, Settings } from '../../screens';
import { theme } from '../../theme';
import { TabBarIcon } from '../TabBarIcon';

const Tab = createBottomTabNavigator();

export const TabNavigator = ({ navigation }) => {
    return (
        <Tab.Navigator  
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.card
                },
            }}
        >
            <Tab.Screen 
                options={{ 
                    tabBarIcon: (props) => <TabBarIcon {...props} type='expenses' />, 
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Add')} style={{ marginRight: 15 }}>
                            <TabBarIcon type='add' size={28} color={theme.colors.text} />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: '600', marginLeft: 20 }}>Expenses</Text>
                    ),
                    headerTitle: ''
                }} 
                name='Expenses' 
                component={Expenses}
            />
            <Tab.Screen 
                options={{ 
                    tabBarIcon: (props) => <TabBarIcon {...props} type='reports' /> ,
                    headerLeft: () => (
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: '600', marginLeft: 20 }}>Reports</Text>
                    ),
                    headerTitle: ''
                }} 
                name='Reports' 
                component={Reports}
            />
            <Tab.Screen 
                options={{ 
                    tabBarIcon: (props) => <TabBarIcon {...props} type='settings' />,
                    headerLeft: () => (
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: '600', marginLeft: 20 }}>Settings</Text>
                    ),
                    headerTitle: ''
                }} 
                name='Settings' 
                component={Settings}
            />
        </Tab.Navigator>
    );
}