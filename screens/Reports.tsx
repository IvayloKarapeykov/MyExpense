import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExpensesList } from "../components/ExpensesList";
import { theme } from "../theme";
import { Recurrence } from "../types/recurrence";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { WeeklyChart } from "../components/charts/WeeklyChart";

type Props = {
    reportsSelectorOpen: boolean,
    setReportsSelectorOpen: any
}

export const Reports = ({ reportsSelectorOpen, setReportsSelectorOpen }: Props) => {
    const [selectedChartRange, setSelectedChartRange] = useState<Recurrence>(Recurrence.Weekly);

    return (
        <View style={styles({ paddingTop: 15 }).flexColumn}>
            <View style={styles({ paddingHorizontal: 15, justifyContent: 'space-between', width: '100%' }).flexRow}>
                <View style={styles({}).flexColumn}>
                    <Text style={{ color: theme.colors.text, fontSize: 20 }}>
                        12 Dec - 18 Dec
                    </Text>
                    <View style={styles({ marginTop: 5 }).flexRow}>
                        <Text style={{ color: theme.colors.textSecondary, fontSize: 16 }}>
                            BGN
                        </Text>
                        <Text style={{ color: theme.colors.text, marginLeft: 4, fontSize: 17, fontWeight: '600' }}>
                            85
                        </Text>
                    </View>
                </View>
                <View style={styles({ alignItems: 'flex-end' }).flexColumn}>
                    <Text style={{ color: theme.colors.text, fontSize: 20 }}>
                        Avg/Day
                    </Text>
                    <View style={styles({ marginTop: 5 }).flexRow}>
                        <Text style={{ color: theme.colors.textSecondary, fontSize: 16 }}>
                            BGN
                        </Text>
                        <Text style={{ color: theme.colors.text, marginLeft: 4, fontSize: 17, fontWeight: '600' }}>
                            85
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
            {
                selectedChartRange === Recurrence.Weekly && (
                    <WeeklyChart expenses={[
                        {
                            id: '1',
                            amount: 100,
                            category: {
                                id: '1',
                                name: 'Food',
                                color: '#4924cd'
                            },
                            date: new Date("2022-09-12T00:00:00.000Z"),
                            note: 'Bought some food',
                            recurrence: Recurrence.None,
                        },
                        {
                            id: '2',
                            amount: 260,
                            category: {
                                id: '2',
                                name: 'Audi',
                                color: '#2438cd'
                            },
                            date: new Date("2022-09-12T00:00:00.000Z"),
                            note: 'Audi A3 8P',
                            recurrence: Recurrence.None,
                        },
                        {
                            id: '3',
                            amount: 150,
                            category: {
                                id: '1',
                                name: 'Food',
                                color: '#4924cd'
                            },
                            date: new Date("2022-09-13T00:00:00.000Z"),
                            note: 'Supermarket',
                            recurrence: Recurrence.None,
                        },
                        {
                            id: '4',
                            amount: 180,
                            category: {
                                id: '3',
                                name: 'Gym',
                                color: '#ab38cd'
                            },
                            date: new Date("2022-09-14T00:00:00.000Z"),
                            note: 'Mesec',
                            recurrence: Recurrence.None,
                        }
                    ]} />
                )
            }
            </View>
            <View style={{ marginTop: 15 }}>
                <ExpensesList 
                    groups={[
                        {
                            day: 'Today',
                            expenses: [
                                {
                                    id: '1',
                                    amount: 100,
                                    category: {
                                        id: '1',
                                        name: 'Food',
                                        color: '#4924cd'
                                    },
                                    date: new Date(),
                                    note: 'Bought some food',
                                    recurrence: Recurrence.None,
                                },
                                {
                                    id: '2',
                                    amount: 260,
                                    category: {
                                        id: '2',
                                        name: 'Audi',
                                        color: '#2438cd'
                                    },
                                    date: new Date(),
                                    note: 'Audi A3 8P',
                                    recurrence: Recurrence.None,
                                }
                            ],
                            total: 360
                        },
                        {
                            day: 'Yesterday',
                            expenses: [
                                {
                                    id: '3',
                                    amount: 150,
                                    category: {
                                        id: '1',
                                        name: 'Food',
                                        color: '#4924cd'
                                    },
                                    date: new Date(),
                                    note: 'Supermarket',
                                    recurrence: Recurrence.None,
                                },
                                {
                                    id: '4',
                                    amount: 150,
                                    category: {
                                        id: '3',
                                        name: 'Gym',
                                        color: '#ab38cd'
                                    },
                                    date: new Date(),
                                    note: 'Mesec',
                                    recurrence: Recurrence.None,
                                }
                            ],
                            total: 300
                        }
                    ]}
                />
            </View>
            <Modal style={{ margin: 0 }} transparent={true} animationType='slide' visible={reportsSelectorOpen}>
                <TouchableOpacity style={{ height: '100%' }} onPress={() => setReportsSelectorOpen(false)} />
                <View
                    style={{ 
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <View style={styles({}).keyboardBar} >
                            <Button title="Done" onPress={() => setReportsSelectorOpen(false)} />
                    </View>
                    <Picker
                        selectedValue={selectedChartRange}
                        style={{ backgroundColor: theme.colors.primary }}
                        itemStyle={{ backgroundColor: theme.colors.border }}
                        onValueChange={(itemValue) => setSelectedChartRange(itemValue) }
                    >
                        {
                            Object.values([Recurrence.Weekly, Recurrence.Monthly, Recurrence.Yearly]).map((rec) => (
                                <Picker.Item key={rec} label={rec} value={rec} color={selectedChartRange === rec ? theme.colors.primary : theme.colors.text} />
                            ))
                        }
                    </Picker>
                </View>
            </Modal>
        </View>
    )
};

const styles = (props) => StyleSheet.create({
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        ...props
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        ...props
    },
    keyboardBar: {
        alignItems: 'flex-end', 
        paddingHorizontal: 10, 
        paddingVertical: 3, 
        backgroundColor: theme.colors.card,
        borderWidth: 1,
        borderTopColor: theme.colors.border 
    },
})