class Dems
{
    constructor(public id:number, name:string,age,salary,desig="GET",pan?){
        console.log("ID :"+id);
        console.log("Name :"+name);
        console.log("Age :"+age);
        console.log("Salary :"+salary);
        console.log("Designation :"+desig);
        console.log("PAN :"+pan);
    }
}
var d=new Dems(101,"Ravi",25,25000,"Developer","ABCD1234E");
console.log("============");
var d2=new Dems(102,"Ravi",25,25000,"Developer");