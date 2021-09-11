//1.JSON => stingify , parse
const student = {
    name:"Ishtiak anam",
    age:18,
    movies:['king kan','dhakar mastan']
}
const studentJSON = JSON.stringify(student)
// console.log(student);
// console.log(studentJSON);

const studentObject = JSON.parse(studentJSON)
// console.log(studentObject)


//2.fetch
fetch(`url`)
.then(res => res.json())
.then(data => console.log(data))

//keys,values
const keys = Object.keys(student)
const values = Object.values(student)

//for 
const numbers = [23,45,65,786,45,34]
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2);

//for of on array like objent
//loop on an object using for in


//add or remove from an array
const products = [
    {name : "Laptop",price: 10000,color:'black'},
    {name : "phone",price: 1000,color:'yello'},
    {name : "watch",price: 5000,color:'blue'},
    {name : "Glass",price: 100,color:'black'},
    {name : "camera",price: 100000,color:'white'}
];

const newProducts = {name:"web",price:700,color:"black"}

//copy products array and then add newProduct
const newProducts = [...products,newProducts]

//creat a new array without one specific item
//remove phone means create a new array without the phone
const remaing = products.filter(product => product.name !== 'phone');