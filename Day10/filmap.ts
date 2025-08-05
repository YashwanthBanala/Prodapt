const employee=[
    {id:1, name:"Varun", age:25, salary:50000},
    {id:2, name:"Pavan", age:21, salary:60000},
    {id:3, name:"Yash", age:21, salary:70000},
    {id:4, name:"Cvarun", age:21, salary:80000}
]

const empWithHighSalary = employee.filter(emp => emp.salary > 50000).map(emp=>emp.name);
console.log(empWithHighSalary);
const totalSalary = employee.reduce((acc, emp) => acc + emp.salary, 0);