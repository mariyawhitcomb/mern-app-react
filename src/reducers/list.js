import { NEW_ITEM, REMOVE_ITEM } from "../constants/list";
import axios from 'axios'

function getItems(){
  axios.get()
}
getItems()
const DEFAULT_STATE = {
  items: []
}

export default function listReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case NEW_ITEM:
      return {
        ...state,
        items: [...state.items, action.items]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, id) => {
          return id !== action.items;
        })
    };

    default:
      return state;
  }
}