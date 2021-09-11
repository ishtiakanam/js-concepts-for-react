const products = [
    {name : "Laptop",price: 10000,color:'black'},
    {name : "phone",price: 1000,color:'yello'},
    {name : "watch",price: 5000,color:'blue'},
    {name : "Glass",price: 100,color:'black'},
    {name : "camera",price: 100000,color:'white'}
];

const price = products.map(product => product.price)
// console.log(price)
const name = products.map(product => product.name)
// console.log(name);

// products.forEach(product => console.log(product.color)) 

products.forEach(product => {

})

//filter
const cheap = products.filter(product => product.price <= 5000)
// console.log(cheap)

const specificName = products.filter(product => product.name.includes('G'));
// console.log(specificName)

//find
const special = products.find(product => product.name.includes('p'))
console.log(special)