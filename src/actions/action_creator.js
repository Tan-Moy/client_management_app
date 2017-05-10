import json from "./data.json";
const immutabeJson = json;

export const CREATE_DATA = "CREATE_DATA";
export const FETCH_DATA = "FETCH_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const SORT_DATA = "SORT_DATA";

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

export function editData(editedData) {
  let json = immutabeJson;
  console.log("editData: ", editedData);
  let index = json.findIndex(item => item.SSN == editedData.SSN);
  console.log(index);
  json[index].firstName = editedData.firstName;
  json[index].lastName = editedData.lastName;
  json[index].email = editedData.email;
  json[index].phoneNumber = editedData.phoneNumber;
  json[index].cityName = editedData.cityName;
  json[index].status = editedData.status;

  console.log(json);
  return {
    type: EDIT_DATA,
    payload: json
  };
}

export function deleteData(data) {
  let json = immutabeJson;
  let index = json.findIndex(item => item.SSN == data.SSN);
  json.splice(index, 1);
}

export function sortData() {
  //console.log(json);
  let json = immutabeJson;
  let sorted = json.sort();
  return {
    type: SORT_DATA,
    payload: sorted
  };
}
