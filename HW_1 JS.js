let item_1 = 5;
console.log(item_1);

let item_2 = 3;
console.log(item_2);

let item_3 = item_1 + item_2;
console.log(item_3);

let item_4 = "Yolochka";
console.log(item_4);

console.log(item_3 + item_4);

console.log(item_3 * item_4);

let item_5 = item_3;

let item_6 = 15;
console.log(item_6);

let item_6_type = typeof(item_6);
console.log(item_6_type);

console.log("item_6 ==", item_6, "\nitem_6_type ==", item_6_type);

let item_7 = String (item_6);
let item_7_type = typeof(item_7);
console.log("item_7 ==", item_7, "\nitem_7_type ==", item_7_type);

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then " + age_2);
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome  !");
} else if (age_1  > age_3) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}
//Задание 1*
const checkAge1 = function(age) {
    let age_1 = 18;
    let age_2 = 60;

    if (age < age_1) {
            console.log("You don’t have access cause your age is " + age + " It’s less then " + age_1);
        } else if (age >= age_1 && age < age_2) {
            console.log("Welcome  !");
        } else if (age > age_2) {
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work");
        }
    }
checkAge1("17");
checkAge1("18");
checkAge1("61");

//Задание 2*
const checkAge2 = function(age) {
    if (typeof(age) != "number") {
        console.log("There is a error");
        return;
    } 
    let age_1 = 18;
    let age_2 = 60;

    if (age < age_1) {
            console.log("You don’t have access cause your age is " + age + " It’s less then " + age_1);
        } else if (age >= age_1 && age < age_2) {
            console.log("Welcome  !");
        } else if (age > age_2) {
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work");
        }
    }
checkAge2("17");
checkAge2("18");
checkAge2("61");

//Задание 3*
const checkAge3 = function(age) {
    if (isNaN(age) == false) {
        age = parseInt(age); 
    } else {
        console.log("There is a error");
        return;
    } 
    let age_1 = 18;
    let age_2 = 60;
        
    if (age < age_1) {
        console.log("You don’t have access cause your age is " + age + " It’s less then " + age_1);
    } else if (age >= age_1 && age < age_2) {
        console.log("Welcome  !");
    } else if (age > age_2) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}
checkAge3("17");
checkAge3("18");
checkAge3("61");