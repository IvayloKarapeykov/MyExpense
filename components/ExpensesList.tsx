import { Text, View, StyleSheet } from "react-native";
import { theme } from "../theme";
import { ExpensesGroup } from "../types/expensesGroup";
import { ExpenseRow } from "./ExpenseRow";

type Props = {
    groups: ExpensesGroup[];
}

export const ExpensesList = ({ groups }: Props) => {
    return (
        <View style={styles({ overflow: 'scroll' }).flexColumn}>
            {
                groups.map(({ day, expenses, total }) => (
                    <View key={day} style={styles({ paddingHorizontal: 15, marginBottom: 24 }).flexColumn}>
                        <Text style={{ marginBottom: 4, color: theme.colors.textSecondary, fontSize: 17, fontWeight: '600' }}>{day}</Text>
                        <View style={{ borderBottomColor: theme.colors.border, borderBottomWidth: StyleSheet.hairlineWidth, marginBottom: 12 }} />
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