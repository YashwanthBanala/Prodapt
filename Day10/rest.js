function myfun() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
    console.log("================");
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var i = nums_1[_a];
        console.log(i);
    }
    for (var _b = 0, nums_2 = nums; _b < nums_2.length; _b++) {
        var i = nums_2[_b];
        sum += i;
    }
    console.log(sum);
}
myfun(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
function greet() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("Hello ".concat(name_1));
    }
}
greet("VARUN", "varun", "Pavan");
