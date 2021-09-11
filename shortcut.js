//"almas",5,true,{},[]
//"",0,false,null,undefind
//check truthy
let myVar = 5;
//check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
//you check negative or falsy anything
if(!myMoney){

}

const money = 60;
let food ;
if(money >100){
    food = 'biriany'
}
else{
    food = 'cha-biscuit'
}

//ternary
let food1 = money>100 ? 'biriyani' : 'cha-biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filterwater';
console.log(drink);

//number to string coversion
const num1 = 54;
console.log(num1);
const numStr = num1 + "";
console.log(numStr)

//string to number
const input = '500';
const inputNum = +input;
console.log(inputNum)

//
let isActive = true;
const showUser = () =>console.log('display user');
const hideUser = () =>console.log('hide user');
isActive ? showUser() : hideUser();
//use  &&if the left side is true then right side will be excuted
isActive && showUser()
//use || if the left side is false than right side will be excuted
isActive ||  hideUser();

//
isActive= !isActive;