import { CREATE_ITEM } from "./types";

export function createItem(expenses) {
    return {
        type: CREATE_ITEM,
        payload: expenses
    }
}