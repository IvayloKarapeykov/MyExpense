import { Text, View } from "react-native"
import { theme } from "../theme"
import { Category } from "../types/category"

type Props = Omit<Category, 'id'> & { lastElement: boolean };

export const CategoryRow = ({ lastElement, color, name }: Props) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                padding: 11,
                borderBottomWidth: lastElement ? 0 : 1,
                borderBottomColor: theme.colors.border,
                backgroundColor: theme.colors.card,
            }}
        >
            <View 
                style={{
                    backgroundColor: color,
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    borderWidth: 2,
                    borderColor: 'white'
                }}
            />
            <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>{name}</Text>
        </View>
    )
}