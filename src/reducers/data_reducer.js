import {
  CREATE_DATA,
  FETCH_DATA,
  DELETE_DATA,
  EDIT_DATA
} from "../actions/action_creator";

export default function(state = [], action) {
  //console.log(action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return [...state, action.payload];

    case CREATE_DATA:
      console.log(action.payload);
      return [action.payload, ...state];

    default:
      return state;
  }
}
