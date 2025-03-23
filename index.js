// Write your solution in this file!
// helpers.js
// test/indexTest.js

let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new employee object and add the new key/value
  let newEmployee = { ...employee }; // This will not modify the original employee
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // This updates the original employee object directly
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // This deletes the key from a clone of the employee object
  let newEmployee = { ...employee }; // This will not modify the original employee
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // This deletes the key from the original employee object directly
  delete employee[key];
  return employee;
}
