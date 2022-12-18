import { useState } from "react";
import { 
    Button,
    KeyboardAvoidingView, 
    Modal, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ListItem } from "../components/ListItem";
import { theme } from "../theme";
import { Recurrence } from "../types/recurrence";
import { Picker } from '@react-native-picker/picker';
import { Category } from "../types/category";
import DateTimePicker from '@react-native-community/datetimepicker';

const CATEGORIES: Category[] = [
    {
        id: '1',
        name: 'Food',
        color: '#51ea43'
    },
    {
        id: '2',
        name: 'Bills',
        color: '#ea43aa'
    },
    {
        id: '3',
        name: 'Audi',
        color: '#FFD600'
    },
    {
        id: '4',
        name: 'Groceries',
        color: '#c9ea43'
    },
];

function getCategory(id) {
    let categoriesCopy = CATEGORIES;
    let findedCategory = categoriesCopy.filter(item => item.id === id);

    if(findedCategory) return findedCategory[0];
    return;
};

export const Add = () => {
    const [amount, setAmount] = useState('');
    const [recurrence, setRecurrence] = useState<Recurrence>(Recurrence.None);
    const [picker, setPicker] = useState(false);
    const [pickerType, setPickerType] = useState<'recurrence' | 'date' | 'category'>('recurrence');
    const [date, setDate] = useState(new Date());
    const [note, setNote] = useState('');
    const [category, setCategory] = useState<Category>();

    function getSelectedValue(type) {
        switch (type) {
            case 'recurrence':
                return recurrence;
            case 'category': 
                return category?.id;
            default:
                break;
        }
    }

    function onChangePickerValue(value) {
        switch (pickerType) {
            case 'recurrence':
                setRecurrence(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'category': 
                setCategory(getCategory(value));
                break;
            default:
                break;
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior='padding'
            keyboardVerticalOffset={112}
            style={{ margin: 15, flex: 1, alignItems: 'center' }}
        >
            <View style={{ alignItems: 'center' }}>
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
                                onPress={() => {
                                    setPickerType('recurrence');
                                    setPicker(true);
                                }}
                            >
                                <Text style={{ fontSize: 17, textAlign: 'right', color: theme.colors.primary, textTransform: 'capitalize' }}>{recurrence}</Text>
                            </TouchableOpacity>
                        }
                    />
                    <ListItem 
                        label="Date"
                        detail={
                            <TouchableOpacity 
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                                onPress={() => {
                                    setPickerType('date');
                                    setPicker(true);
                                }}
                            >
                                <Text style={{ fontSize: 17, textAlign: 'right', color: theme.colors.primary, textTransform: 'capitalize' }}>
                                    {date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                    <ListItem 
                        label="Note"
                        detail={
                            <TextInput 
                                placeholder='Note'
                                onChangeText={(value) => setNote(value)}
                                value={note}
                                style={styles({}).textInput}
                                textAlign='right'
                            />
                        }
                    />
                    <ListItem 
                        label="Category"
                        lastElement
                        detail={
                            <TouchableOpacity 
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                                onPress={() => {
                                    setPickerType('category');
                                    setPicker(true);
                                }}
                            >
                                <Text style={{ fontSize: 17, textAlign: 'right', color:  category?.color || theme.colors.primary }}>
                                    { category?.name || 'Category' }
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <TouchableOpacity style={styles({}).submitButton} >
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, textAlign: 'center' }}>
                        Submit expense
                    </Text>
                </TouchableOpacity>
                {/* PICKERS */}
                <Modal style={{ margin: 0 }} transparent={true} animationType='slide' visible={picker}>
                    <TouchableOpacity style={{ height: '100%' }} onPress={() => setPicker(false)} />
                    <View
                        style={{ 
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                    >
                        <View style={styles({}).keyboardBar} >
                            <Button title="Done" onPress={() => setPicker(false)} />
                        </View>
                        {
                            pickerType !== 'date' &&
                            <Picker
                                selectedValue={getSelectedValue(pickerType)}
                                style={{ backgroundColor: theme.colors.primary }}
                                itemStyle={{ color: 'white', backgroundColor: theme.colors.border }}
                                onValueChange={(itemValue) => onChangePickerValue(itemValue) }
                            >
                                {
                                    pickerType === 'recurrence' && (
                                        Object.keys(Recurrence).map((rec) => (
                                            <Picker.Item key={rec} label={rec} value={rec} />
                                        ))
                                    )
                                }
                                {
                                    pickerType === 'category' && (
                                        CATEGORIES.map(({ id, name, color }) => (
                                            <Picker.Item key={id} label={name} value={id} color={color} />
                                        ))
                                    )
                                }
                            </Picker>
                        }
                        {
                            pickerType === 'date' &&
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode='datetime'
                                display='spinner'
                                maximumDate={new Date()}
                                minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                                onChange={(event, date) => onChangePickerValue(date)}
                                textColor='white'                
                            />
                        }
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
    },
    keyboardBar: {
        alignItems: 'flex-end', 
        paddingHorizontal: 10, 
        paddingVertical: 3, 
        backgroundColor: theme.colors.card,
        borderWidth: 1,
        borderTopColor: theme.colors.border 
    },
    submitButton: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 32,
        width: 200,
    }
})