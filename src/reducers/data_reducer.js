import {
    CREATE_DATA,
    FETCH_DATA,
    DELETE_DATA,
    EDIT_DATA
} from "../actions/action_creator";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_DATA:
            return [...state, action.payload];

        default:
            return state;
    }
}
