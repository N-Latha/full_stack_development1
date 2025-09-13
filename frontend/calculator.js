
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
let subtraction=