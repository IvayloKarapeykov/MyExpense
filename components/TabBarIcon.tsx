import { AddIcon } from './tabBarIcons/Add';
import { ExpensesIcon } from './tabBarIcons/Expenses';
import { ReportsIcon } from './tabBarIcons/Reports';
import { SettingsIcon } from './tabBarIcons/Settings';
 
type TabBarIconProps = {
    color: string;
    size: number;
    type: 'expenses' | 'reports' | 'add' | 'settings';
};

export const TabBarIcon = ({ type, color, size }: TabBarIconProps ) => {
    switch (type) {
        case 'expenses':
            return <ExpensesIcon width={size} height={size} color={color} />;
        case 'reports':
            return <ReportsIcon width={size} height={size} color={color} />;
        case 'add':
            return <AddIcon width={size} height={size} color={color} />;
        case 'settings':
            return <SettingsIcon width={size} height={size} color={color} />;
        default:
            break;
    }
};