import { NEW_ITEM, REMOVE_ITEM } from "../constants/list";

const DEFAULT_STATE = {
  items: []
}

export default function listReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case NEW_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, id) => {
          return id !== action.item;
        })
    };

    default:
      return state;
  }
}