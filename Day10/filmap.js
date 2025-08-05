var employee = [
    { id: 1, name: "Varun", age: 25, salary: 50000 },
    { id: 2, name: "Pavan", age: 21, salary: 60000 },
    { id: 3, name: "Yash", age: 21, salary: 70000 },
    { id: 4, name: "Cvarun", age: 21, salary: 80000 }
];
var empWithHighSalary = employee.filter(function (emp) { return emp.salary > 50000; }).map(function (emp) { return emp.name; });
console.log(empWithHighSalary);
