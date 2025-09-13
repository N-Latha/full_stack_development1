console.log("I am Latha")
// Data types in js
num=12;
str="hi";
bol=true;
// undefined

// var,let,const
var name1="srit"
console.log(name1)
var name1="hi";
console.log(name1)
var name1="madhu"
console.log(name1)
let cons="cse";
let age=20;
console.log(age)
age=21;
const weight=21;
console.log(weight)
console.log(weight)
function welcomemessege(name){
    return "welcome" + name + "!good morning";

}
let messege=welcomemessege("latah");
console.log(messege)
function collegedetails(name,age,branch){
    return {name,age,branch};
    

}
let details=collegedetails("latha",20,"cse");
console.log("Name:",details.name)
console.log("Age:",details.age)
console.log("Branch:",details.branch)
let addage=age+2;
 let subage=age-2;
let mulage=age*2;
let divage=age/2;
console.log(addage)
console.log(subage)
console.log(mulage)
console.log(divage)
function areatri(base,height){
    return 0.5*base*height;
}
let area=areatri(5,10);
console.log("Area of triangle:",area)
function factorial(n){
    if(n==0||n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    } 
}   
let fact=factorial(5);
console.log("Factorial of 5:",fact)
let fact1=1;
for(let i=1;i<=5;i++){
    fact=fact*i;
}
console.log("Factorial of 5 using loop:",fact)
function compoundinterest(p,r,t){
    return p*(Math.pow((1+r/100),t));
}
let ci=compoundinterest(10000,5,2);
console.log("Compound interest:",ci)
if(age>=20){
    console.log.apply("your are eligible")
}

    return [num1,num2]

function add(num1,num2){
    return num1+num2
}
function sub(num1,num2){
    return num1-num2
}
function div(num1,num2){
    if(num2==0){
        console.log("Error")

    }
    else{
        return num1/num2
    }
}
function mul(num1,num2){
    return num1*num2
}
let addition=add(23,45)
console.log(addition)
let distance = 19.5; // total distance traveled
let price = 0;

// Use a for loop to cover each km

if (distance <= 5) {
    price = 10;
} else if (distance <= 15) {
    price = 10 + 15; // first 5 km (₹10) + next kms (₹15)
} else {
    price = 10 + 15 + 20; // first 5 km + next 10 km + beyond
}
// print 5 table using while loop

let i1=1;
let b=5;
while(i1<=10){
    console.log(b + "x" + i1 + "="+b*i1)
    i1++;
}
// do while loop
let l=1;
let n=5;
do{
    console.log(n + "x" + l + "="+n*l)
    l++
}
while(l<=10);
    
