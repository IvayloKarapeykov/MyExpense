import { useState } from "react";
import { 
    Button,
    KeyboardAvoidingView, 
    Modal, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ListItem } from "../components/ListItem";
import { theme } from "../theme";
import { Recurrence } from "../types/recurrence";
import { Picker } from '@react-native-picker/picker';

export const Add = () => {
    const [amount, setAmount] = useState('');
    const [recurrence, setRecurrence] = useState<Recurrence>(Recurrence.None);
    const [recurrencePicker, setRecurrencePicker] = useState(false);

    return (
        <KeyboardAvoidingView 
            behavior='padding'
            keyboardVerticalOffset={112}
            style={{ margin: 15, flex: 1, alignItems: 'center' }}
        >
            <View>
                <View style={{ borderRadius: 11, overflow: 'hidden', width: '100%' }}>
                    <ListItem 
                        label="Amount"
                        detail={
                            <TextInput 
                                placeholder='Amount'
                                keyboardType='numeric'
                                returnKeyType='done'
                                onChangeText={(value) => setAmount(value)}
                                value={amount}
                                style={styles({}).textInput}
                                textAlign='right'
                            />
                        }
                    />
                    <ListItem 
                        label="Recurrence"
                        detail={
                            <TouchableOpacity 
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                                onPress={() => setRecurrencePicker(true)}
                            >
                                <Text style={{ fontSize: 17, textAlign: 'right', color: theme.colors.primary, textTransform: 'capitalize' }}>{recurrence}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: theme.colors.primary,
                        paddingHorizontal: 20,
                        paddingVertical: 13,
                        borderRadius: 10,
                        marginTop: 32,
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 17 }}>
                        Submit expense
                    </Text>
                </TouchableOpacity>
                <Modal style={{ margin: 0 }} transparent={true} animationType='slide' visible={recurrencePicker}>
                    <TouchableOpacity style={{ height: '100%' }} onPress={() => setRecurrencePicker(false)} />
                    <View
                        style={{ 
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                    >
                        <View style={{ alignItems: 'flex-end', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: theme.colors.card }}>
                            <Button title="Done" onPress={() => setRecurrencePicker(false)} />
                        </View>
                        <Picker
                            selectedValue={recurrence}
                            style={{ backgroundColor: theme.colors.primary }}
                            itemStyle={{ color: 'white', backgroundColor: theme.colors.border }}
                            onValueChange={(itemValue) =>
                                setRecurrence(itemValue)
                            }
                        >
                            {Object.keys(Recurrence).map((rec) => (
                                <Picker.Item key={rec} label={rec} value={rec} />
                            ))}
                        </Picker>
                    </View>
                </Modal>
            </View>
        </KeyboardAvoidingView>
    )  
}

const styles = (props) => StyleSheet.create({
    textInput: {
        color: 'white',
        flex: 1,
        paddingLeft: 8,
        fontSize: 17,
    },
    colorButton: {
        backgroundColor: props.selectedColor,
        width: 24,
        height: 24,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        marginRight: 10
    }
})