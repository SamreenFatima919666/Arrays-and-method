let fruit = ["apple" , "banana" , "grapes"];
fruit.push("pineapple");
console.log(fruit);


let studName = ["Samreen" ,"Urooba" , "Horera" , "Enaya"];
studName.unshift("Areeba");
console.log(studName);


let fruits = ["apple" , "banana" , "grapes"];
fruits.forEach(function(value){
    console.log(value);
});

let prices = [20, 40, 50];
let newPrices = prices.map((value)=>{
 return value *2
});
console.log(prices);
console.log(newPrices);


let num = [20, 13, 2, 67, 83, 23, 18, 12];
 let adult = num.filter(function(value){
    return value > 18;
 })
 console.log(adult);
 

 let number = [20 ,30, 30];
let newNum = number.reduce(function(num , sum){
return num +sum 
}, 0);
console.log(newNum);
