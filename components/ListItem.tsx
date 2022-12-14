import { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { theme } from "../theme";

type Props = {
    label: string;
    detail?: React.ReactNode;
    onClick?: () => void;
    swipeToDelete?: boolean;
    onDelete?: () => void;
    isDestructive?: boolean;
    lastElement?: boolean;
}

export const ListItem = ({ label, detail, onClick, swipeToDelete, onDelete, isDestructive, lastElement }: Props) => {
    const item = <TouchableOpacity
        style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: !!detail ? 'space-between' : 'flex-start',
            alignItems: 'center',
            padding: 11,
            borderBottomWidth: lastElement ? 0 : 1,
            borderBottomColor: theme.colors.border,
            backgroundColor: theme.colors.card,
        }}
        activeOpacity={0.5}
        onPress={onClick}
        disabled={!onClick}
    >
        <Text style={{ fontSize: 18, color: isDestructive ? theme.colors.error : 'white' }}>{label}</Text>
        {detail}
    </TouchableOpacity>

    if (swipeToDelete) {
        return (
            <Swipeable
                renderRightActions={() => (
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 100
                        }}
                        onPress={onDelete}
                    >
                        <Text style={{ fontSize: 18, color: 'white' }}>Delete</Text>
                    </TouchableOpacity>
                )}
                onSwipeableRightOpen={onDelete}
            >
                {item}   
            </Swipeable>
        );
    }
    return item;
}