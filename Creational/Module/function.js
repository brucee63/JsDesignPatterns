var Module = function() {
    var privateVar = 'I am private...';
    return {
        method: function() {
            console.log('in method');
        },
        nextMethod: function () {
            console.log('in nexdtMethod');
        },
    }
}