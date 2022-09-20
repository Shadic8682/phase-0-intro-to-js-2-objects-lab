// Write your solution in this file!
const employee = {name: "Sam", streetAddress: "11 Broadway"}

function updateEmployeeWithKeyAndValue() {
   var extraNewEmployee = {...employee};
   extraNewEmployee = {name: "Sam", streetAddress: "11 Broadway"}
   const employee = {...employee, ...extraNewEmployee};
   return employee
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}