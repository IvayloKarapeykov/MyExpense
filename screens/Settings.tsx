import { View } from "react-native";
import { ListItem } from "../components/ListItem";
import Entypo from '@expo/vector-icons/Entypo';

export const Settings = ({ navigation }) => (
    <View 
        style={{ 
            margin: 15,
            borderRadius: 10,
            overflow: 'hidden'
        }}
    >
        <ListItem 
            label="Categories"
            detail={
                <Entypo 
                    name="chevron-thin-right" 
                    color='white'
                    style={{ opacity: 0.3 }} 
                    size={18}
                />
            }
            onClick={() => {
                navigation.navigate('Categories');
            }}
        />
        <ListItem label="Erase all data" isDestructive lastElement onClick={() => {}}
        />
    </View>
);