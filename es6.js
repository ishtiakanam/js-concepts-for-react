const number = [56,33,87,98,76]
const student = {
    name:"Ishtiak anam",
    age:18,
    // college = 'patiya govt'0000
}


//1.template string
const about = `My name is ${student.name}.And age is ${student.age}`
console.log(about)


//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addTree = (x,y,z) => x + y+ z;
const doMath = (num1,num2) => {
    const sum = num1 + num2
    return sum;
}

//spread operator
const newNumbers = [...numbers];
numbers.push(99)
console.log(newNumbers)


//crate a new array from an older array and add an element
const currentNumbers = [...numbers,55];

console.log (currentNumbers)