import { NEW_ITEM, REMOVE_ITEM } from "../constants/list";

export function createNewItem(name) {
  return {
    type: NEW_ITEM,
    items: {
      name,
      quantity: 1
    }
  }
}
export const removeItem = id => ({type: REMOVE_ITEM, items: id})