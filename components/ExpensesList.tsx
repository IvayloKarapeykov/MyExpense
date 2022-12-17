import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../theme";
import { ExpensesGroup } from "../types/expensesGroup";
import { ExpenseRow } from "./ExpenseRow";

type Props = {
    groups: ExpensesGroup[];
}

export const ExpensesList = ({ groups }: Props) => {
    return (
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
            {
                groups.map(({ day, expenses, total }) => (
                    <View key={day} style={styles({ paddingHorizontal: 15, marginBottom: 24 }).flexColumn}>
                        <Text style={{ marginBottom: 4, color: theme.colors.textSecondary, fontSize: 17, fontWeight: '600' }}>{day}</Text>
                        <View style={{ borderBottomColor: theme.colors.border, borderBottomWidth: StyleSheet.hairlineWidth, marginBottom: 8 }} />
                        {
                            expenses.map((expense) => (
                                <ExpenseRow key={expense.id} expense={expense} />
                            ))
                        }
                        <View style={{ borderBottomColor: theme.colors.border, borderBottomWidth: StyleSheet.hairlineWidth, marginBottom: 4 }} />
                        <View style={styles({ width: '100%', justifyContent: 'space-between', alignItems: 'center' }).flexRow}>
                            <Text style={{ fontSize: 17, color: theme.colors.textSecondary }}>Total: </Text>
                            <Text style={{ fontSize: 17, color: theme.colors.textSecondary, fontWeight: '600' }}>BGN {total}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

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