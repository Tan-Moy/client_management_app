import json from "./data.json";
const immutabeJson = json;

export const CREATE_DATA = "CREATE_DATA";
export const FETCH_DATA = "FETCH_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const ARRANGE_DATA = "ARRANGE_DATA";

export function fetchData() {
  //console.log(json);
  let json = immutabeJson;
  return {
    type: FETCH_DATA,
    payload: json
  };
}

export function createData(newData) {
  let json = immutabeJson;
  json.unshift(newData);
  console.log("CustomerBello: ", json);
  return {
    type: CREATE_DATA,
    payload: json
  };
}
// export function arrangedData() {}
