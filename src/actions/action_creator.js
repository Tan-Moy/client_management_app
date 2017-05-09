import json from "./data.json";

export const CREATE_DATA = "CREATE_DATA";
export const FETCH_DATA = "FETCH_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const EDIT_DATA = "EDIT_DATA";

export function fetchData() {
    console.log(json);
    return {
        type: FETCH_DATA,
        payload: json
    };
}
