import { ExpensesList } from "../components/ExpensesList";
import { Recurrence } from "../types/recurrence";

export const Expenses = () => (
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
                        note: 'Bought some food',
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
);