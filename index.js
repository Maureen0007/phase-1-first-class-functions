function receivesAFunction(callback) {
    return callback();
    
}
function returnsANamedFunction(params) {
    return function otherFunction(params) {
        console.log()
        
    }
    
}

function returnsAnAnonymousFunction(params) {
    return () => console.log();
    
}