import { CREATE_ITEM, DELETE_ITEM } from "./types";

export function createItem(expenses) {
    return {
        type: CREATE_ITEM,
        payload: expenses
    }
}

export function deleteItem(expenses) {
    return {
        type: DELETE_ITEM,
        payload: expenses
    }
}
