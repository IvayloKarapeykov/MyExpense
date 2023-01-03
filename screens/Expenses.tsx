import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ExpensesList } from "../components/ExpensesList";
import { theme } from "../theme";
import { Recurrence } from "../types/recurrence";

export const Expenses = () => (
    <View style={styles({ overflow: 'scroll', paddingTop: 16 }).flexColumn}>
        <View style={styles({ marginBottom: 16, alignItems: 'center', justifyContent: 'center' }).flexRow}>
            <Text style={{ color: theme.colors.text, fontSize: 17 }}>Total for: </Text>
            <TouchableOpacity style={{ marginLeft: 25 }}>
                <Text style={{ color: theme.colors.primary, fontSize: 17 }}>This week</Text>
            </TouchableOpacity>
        </View>
        <View style={styles({ alignItems: 'flex-start', justifyContent: 'center', marginBottom: 16 }).flexRow}>
            <Text style={{ color: theme.colors.text, fontSize: 32, fontWeight: '600' }}>159</Text>
            <Text style={{ color: theme.colors.text, fontSize: 17, marginTop: 4, marginLeft: 2 }}>BGN</Text>
        </View>
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
);

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
    }
})