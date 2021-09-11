//1.array destructuring
const numbers = [43,56];
// const [x,y]= [43,56]

const [x,y] = numbers;

function getValue (num1,num2){
    const nums = [num1,num2];
    return nums
}

// const [first,second]= [90,32]
const [first,second]= getValue(90,34)

// console.log(getValue(90,32))
const student = {
    name:"Ishtiak anam",
    age:18,
    movies:['king kan','dhakar mastan']
}
const [firstMovie,secondMovie] =student.movies;


//object destructing
const {name,age}= {name:'alu',age:18}
const {id,name,age}= {id:12, name:'alu',age:18}


const employee = {
    id:'vs code',
    designation:'devloper',
    machin: 'Hp',
    language:['html','css','js'],
    specification : {
        height: 66,
        weight:56,
        address:"Rashidabad",
        drink:'water'
    }
}

const {machin,id} = employee;
const {weight,address} =employee.specification