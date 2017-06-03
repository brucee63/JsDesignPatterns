// Four things new does
// 1. creates a new object
// 2. links to an object prototype
// 3. binds 'this' to the new object scope
// 4. returns this

function ObjectName(param1, param2){
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function () {
        return this.param1 + ' ' + this.param2;
    }
}
