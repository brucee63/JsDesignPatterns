function myFunc(a, b, c){
    return a + b + c;
}

console.log(myFunc(1, 2, 3));
console.log(myFunc(1, 2, 3, 4));
console.log(myFunc(1, 2));

// arguments object
// available in all functions
// like an array, but not really and array

function myFunc2() {
    var x = 0;
    for(var i =  0; i < arguments.length; i++){
        x = x + arguments[i];
    }
    return x;
}

console.log(myFunc2(1, 2, 3));
console.log(myFunc2(1, 2, 3, 4));
console.log(myFunc2(1, 2));
