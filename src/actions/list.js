import { NEW_ITEM, REMOVE_ITEM } from "../constants/list";

export function createNewItem(item) {
  return {
    type: NEW_ITEM,
    item
  }
}
export const removeItem = id => ({type: REMOVE_ITEM, item: id})