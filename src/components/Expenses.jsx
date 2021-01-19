import React from "react";
import { connect } from "react-redux";
import Expense from "./Expense";

const Expenses = ({expenses}) => {
    if(!expenses.length){
        return <p>There are no any expenses yet.</p>
    }
    return (
        <div>
            {expenses.map(expense => <Expense expense={expense} key={expense.id} />)}
        </div>
    )
}
const mapStateToProps = state => ({
    expenses: state.expenses
})
export default connect(mapStateToProps)(Expenses)