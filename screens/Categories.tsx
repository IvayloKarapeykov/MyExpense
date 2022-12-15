import React, { useEffect, useState } from 'react';
import { 
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet, 
    TextInput, 
    View, 
    Alert, 
    Keyboard,
    ScrollView
} from "react-native";
import { theme } from "../theme";
import { TouchableOpacity, Swipeable, RectButton } from "react-native-gesture-handler";
import { TabBarIcon } from "../components/TabBarIcon";
import { Category } from '../types/category';
import { CategoryRow } from '../components/CategoryRow';
import { CPicker } from '../components/ColorPicker';

export const Categories = () => {
    const [showCPicker, setShowCPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(theme.colors.primary);
    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const submitCategory = () => {
        if(categoryName.length === 0) {
            return;
        }

        setCategories([...categories, {
            id: Math.random().toString(),
            color: selectedColor,
            name: categoryName
        }]);
        setCategoryName('');
    }

    const renderLeftActions = ({ id, name }) => {
        return (
          <RectButton style={{ backgroundColor: theme.colors.error, width: 50, height: '100%', justifyContent: 'center' }} onPress={() => alertBeforeDelete({ id, name })}>
            <View style={{ alignItems: 'center' }}>
                <TabBarIcon type="delete" size={24} color={theme.colors.text} />
            </View>
          </RectButton>
        );
    };

    const alertBeforeDelete = ({ id, name }) => {
        Alert.alert(
            'Are you sure?',
            `Delete '${name}' category`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Delete", onPress: () => deleteCategory({ id }), style: 'destructive' }
            ],
            {
                userInterfaceStyle: 'dark'
            }
        )
    }

    const deleteCategory = ({ id }) => {
        let catCopy = categories;
        let newCat = catCopy.filter(item => item.id !== id);
        setCategories(newCat);
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true); // or some other action
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false); // or some other action
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
    <KeyboardAvoidingView 
        behavior="height"
        style={{ margin: 15, flex: 1 }}
        keyboardVerticalOffset={175}
    >
        <View 
            style={{ 
                borderRadius: 10,
                overflow: 'hidden',
                maxHeight: isKeyboardVisible ? 337 : 800
            }}
        >
            <ScrollView 
                automaticallyAdjustKeyboardInsets
            >
            {
                categories && categories.map(({ id, color, name }, index) => (
                    <Swipeable key={id} renderRightActions={() => renderLeftActions({ id, name })}>
                        <CategoryRow lastElement={(categories.length - 1) === index ? true : false} color={color} name={name} />
                    </Swipeable>
                ))
            }
            </ScrollView>
        </View>
        <View style={{ flex: 1 }} />
        <View 
            style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                paddingVertical: 8,
                alignItems: 'center',
            }} 
        >
            <TouchableOpacity onPress={() => {
                setShowCPicker(val => !val)
                Keyboard.dismiss();
            }}>
                <View style={styles({ selectedColor }).colorButton}/>
            </TouchableOpacity>

            <TextInput 
                placeholder='Category name'
                onChangeText={(value) => setCategoryName(value)}
                value={categoryName}
                keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'} // This helps us to prevent emoji's using
                style={styles({}).textInput}
            />

            <TouchableOpacity style={{ padding: 5 }} onPress={submitCategory}>
                <TabBarIcon type="create" size={34} color={theme.colors.primary} />
            </TouchableOpacity>
        </View>
        <CPicker visible={showCPicker} selectedColor={selectedColor} setSelectedColor={setSelectedColor} setShowModal={setShowCPicker}/>
    </KeyboardAvoidingView>
    );
};

const styles = (props) => StyleSheet.create({
    textInput: {
        color: 'white',
        borderColor: theme.colors.border,
        borderWidth: 1,
        flex: 1,
        borderRadius: 10,
        paddingLeft: 8,
        height: 40
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