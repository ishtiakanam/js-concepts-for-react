//1.how to declare a variable using let and const
const father = "Abdul Latif"
let season = "rainy"
season = 'winter'


//2.condition
// 6 basic condition >,<,===,!==,<=,=>
//multiple condition: &&, || 

if(father === "Abdul Latif" || season === 'rainy'){

}
else if(father === "Abdul Latif"){

}
else{

}

//3 array declare
//index
//length,push
const numbers = [12,3,4,56,78]

//4. for loop 
for(let i = 0; i<numbers.length; i++){
    const number = number[i]
    console.log(number)
}

//5.function 
function multiple(num1,num2){
    const result = num1 *num2;
    return result;
}
const output = multiple(56,23)
console.log(output)

//6. object
//3 ways to access property of name
const student = {
    name:"Ishtiak anam",
    age:18,
}

const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student["age"]); //access bia property name string
console.log(student[myVariable]); //access via property name in a variable


