
//let fruits = ['apple', 'corn']
//add
function add(apple, corn) {
    return (apple + corn)
}

console.log(add(4,2))


//multiply

function multiply(x, y) {
    let total = 0
    for (let i = 0; i < y; i += 1) {
        total = add(x, total)
    }
    return total
}
console.log(multiply(2,8))


//power/exponentiation

function power(x, n) {
    let total = 1
    for (let i = 0; i < n; i += 1){
        total = multiply(x,total)
    }
    return total
}
console.log(power(3,4))

//Factorial

function factorial(x) {
    let n = 1
   for (let i = x; i > 1; i -= 1 ){
    n = multiply(n, i)
   } 
   return n 
}

console.log(factorial(4))