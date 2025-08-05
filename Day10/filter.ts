const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function abc() {
    // for(let i of nums){
    //     if(i%2===0){
    //         console.log(i);
    //     }
    // }
}
abc()
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);
const oddNums = nums.filter(num => num % 2 !== 0);
console.log(oddNums);