import { CREATE_ITEM } from "./types";

const initialState = {
    expenses: []
}

export const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ITEM:
            return { ...state, expenses: [...state.expenses, action.payload]}
        default: return state
    }
}