import { Text, View } from "react-native";
import { ListItem } from "../components/ListItem";
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from "../theme";

export const Settings = () => (
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
            onClick={() => {}}
        />
        <ListItem label="Erase all data" isDestructive onClick={() => {}}
        />
    </View>
);