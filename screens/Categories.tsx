import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native";
import { theme } from "../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TabBarIcon } from "../components/TabBarIcon";
import { Category } from '../types/category';
import { CategoryRow } from '../components/CategoryRow';
import { CPicker } from '../components/ColorPicker';

export const Categories = ({ navigation }) => {
    const [showCPicker, setShowCPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(theme.colors.primary);
    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState<Category[]>([])

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

    return (
    <KeyboardAvoidingView 
        behavior="height"
        style={{ margin: 15, flex: 1 }}
        keyboardVerticalOffset={180}
    >
        <View 
            style={{ 
                borderRadius: 10,
                overflow: 'hidden',
            }}
        >
            {
                categories && categories.map(({ id, color, name }, index) => (
                    <CategoryRow key={id} lastElement={(categories.length - 1) === index ? true : false} color={color} name={name} />
                ))
            }
        </View>
        <View style={{ flex: 1 }} />
        <View 
            style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                paddingVertical: 8,
                alignItems: 'center'
            }} 
        >
            <TouchableOpacity onPress={() => setShowCPicker(val => !val)}>
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