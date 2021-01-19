import React from "react";

const Expense = ({expense}) => {
    return <div>
        {`${expense.data} ${expense.name} ${expense.prise} ${expense.currency}`}
    </div>
}

export default Expense;