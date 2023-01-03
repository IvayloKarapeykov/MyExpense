import React, { useCallback, useEffect, useMemo } from "react";
import { Dimensions, Text } from "react-native";
import { theme } from "../../theme";
import { Expense } from "../../types/expense";
import { BarChart } from 'react-native-chart-kit';

type Props = {
    expenses: Expense[]
}

const dayNumberNames = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

export const WeeklyChart = ({ expenses }: Props) => {
    const groupedExpenses = useMemo(() => {
        const groupedExpenses = expenses.reduce((acc, expense) => {
            const day = dayNumberNames[new Date(expense.date).getDay()];
            acc[day] += expense.amount;
            return acc;
        }, {
            Sunday: 0,
            Monday: 0,
            Tuesday: 0,
            Wednesday: 0,
            Thursday: 0,
            Friday: 0,
            Saturday: 0,
        } as Record<string, number>)
        return groupedExpenses;
    }, [expenses])

    console.log(groupedExpenses)

    return (
        <BarChart 
            data={{
                labels: Object.keys(groupedExpenses),
                datasets: [{
                    data: Object.values(groupedExpenses)
                }]
            }}
            width={Dimensions.get('window').width - 30}
            height={220}
            yAxisLabel='BGN '
            yAxisSuffix=''
            chartConfig={{
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: () => theme.colors.text,
                formatXLabel(xLabel) {
                    return xLabel[0] + xLabel[1];
                }
            }}
        />
    )
};