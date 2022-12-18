import { Text, View, StyleSheet } from "react-native";
import { theme } from "../theme";
import { Expense } from "../types/expense";

type Props = {
    expense: Expense;
}

export const ExpenseRow = ({ expense }: Props) => {
    return (
        <View style={styles({ marginBottom: 12 }).flexColumn}>
            <View style={styles({ width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }).flexRow}>
                <Text style={{ fontSize: 17, fontWeight: '600', color: theme.colors.text }}>
                    {expense.note}
                </Text>
                <Text style={{ fontSize: 17, fontWeight: '600', color: theme.colors.text }}>
                    BGN {expense.amount}
                </Text>
            </View>
            <View style={styles({ width: '100%', justifyContent: 'space-between', alignItems: 'center' }).flexRow}>
                <View 
                    style={{ 
                        backgroundColor: `${expense.category.color}66`, // TODO: lower the opacity
                        paddingHorizontal: 6, 
                        paddingVertical: 2, 
                        borderRadius: 8 
                    }}
                >
                        <Text style={{ color: expense.category.color, fontSize: 13 }} >{expense.category.name}</Text>
                </View>
                <Text style={{ fontSize: 17, color: theme.colors.textSecondary  }}>
                    {`${expense.date.getHours()}`.padStart(2, '0')}
                    :
                    {`${expense.date.getMinutes()}`.padStart(2, '0')}
                </Text>
            </View>
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