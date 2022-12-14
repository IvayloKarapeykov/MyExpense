import { View, Pressable, Text, Modal } from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import { theme } from '../theme';

export const CPicker = ({ visible, selectedColor, setSelectedColor, setShowModal }) => {

    const onSelectColor = ({ hex }) => {
        setSelectedColor(hex)
    }

    return (
        <Modal transparent visible={visible} onRequestClose={() => setShowModal(false)} animationType='slide'>
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <View 
                    style={{ 
                        height: 400, 
                        margin: 25,
                        marginTop: 50, 
                        paddingHorizontal: 20,
                        paddingBottom: 15,
                        borderRadius: 10, 
                        backgroundColor: theme.colors.card
                    }}
                >
                    <ColorPicker
                        hideSliders
                        color={selectedColor}
                        onColorChange={(hsv) => onSelectColor({ hex: fromHsv(hsv) })}
                        style={{flex: 1}}
                    />

                    <Pressable 
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 12,
                            paddingHorizontal: 32,
                            marginTop: 5,
                            borderRadius: 10,
                            elevation: 3,
                            backgroundColor: 'black',
                        }} 
                        onPress={() => 
                        setShowModal(false)}
                    >
                        <Text 
                            style={{ 
                                fontSize: 16,
                                lineHeight: 21,
                                fontWeight: 'bold',
                                letterSpacing: 0.25,
                                color: selectedColor, 
                            }}
                        >
                            Select
                        </Text>
                    </Pressable>

                </View>
            </View>
        </Modal>
    )
}