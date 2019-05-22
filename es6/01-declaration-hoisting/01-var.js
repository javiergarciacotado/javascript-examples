function foo() {

    /*
    var has no concept of block scope. 
    The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global
    */
    for (var i=0; i < 10; i++) {} 

    console.log("i = " + i);
}

foo();