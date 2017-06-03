var Module = function() {
    var privateVar = 'I am private...',
    
    var method = function() {
        console.log('in method');
    },
    var nextMethod = function () {
        console.log('in nextMethod');        
    }
    return {
        method : method,
        nextMethod : nextMethod
    }
}