var customer = "Javi";  //global scope

(function() {
    console.log("1. Customer INSIDE the function is: " + customer); //undefined
    if (true) {
        var customer = "Gael"; //customer variable declaration (not initialize) will go on top of the function
    }

    console.log("2. Customer INSIDE the function is: " + customer); //Gael    
})();
console.log("Customer OUTSIDE the function is: " + customer);  //Javi