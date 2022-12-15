import { Alert, View } from "react-native";
import { ListItem } from "../components/ListItem";
import Entypo from '@expo/vector-icons/Entypo';

export const Settings = ({ navigation }) => {

    const eraseDataAlert = () => {
        Alert.alert(
            'Are you sure?',
            `This action cannot be undone.`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Erase data", onPress: () => console.log('erase'), style: 'destructive' }
            ],
            {
                'userInterfaceStyle': 'dark'
            }
        )
    }

    return (
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
            <ListItem label="Erase all data" isDestructive lastElement onClick={() => eraseDataAlert()}
            />
        </View>
    )
};