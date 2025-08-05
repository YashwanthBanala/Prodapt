function myfun(...nums){
    let sum=0;
    for(let i=0; i<nums.length; i++){
        console.log(nums[i]);
    }
    console.log("================");
    for(let i of nums){
        console.log(i);
    }
    for(let i of nums){
        sum+=i;
    }
    console.log(sum);
}
myfun(10,20,30,40,50,60,70,80,90,100);



function greet(...names){
    for(let name of names){
        console.log(`Hello ${name}`);
    }
}
greet("VARUN","varun","Pavan");