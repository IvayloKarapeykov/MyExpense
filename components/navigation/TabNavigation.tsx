import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Expenses, Reports, Add, Settings } from '../../screens';
import { theme } from '../../theme';
import { TabBarIcon } from '../TabBarIcon';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator  
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.card
                },
            }}
        >
            <Tab.Screen 
                options={{ tabBarIcon: (props) => <TabBarIcon {...props} type='expenses' /> }} 
                name='Expenses' 
                component={Expenses}
            />
            <Tab.Screen 
                options={{ tabBarIcon: (props) => <TabBarIcon {...props} type='reports' /> }} 
                name='Reports' 
                component={Reports}
            />
            <Tab.Screen 
                options={{ tabBarIcon: (props) => <TabBarIcon {...props} type='add' /> }} 
                name='Add' 
                component={Add}
            />
            <Tab.Screen 
                options={{ tabBarIcon: (props) => <TabBarIcon {...props} type='settings' /> }} 
                name='Settings' 
                component={Settings}
            />
        </Tab.Navigator>
    );
}