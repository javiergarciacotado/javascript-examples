const customer = "Javi";

(function() {
    console.log("Customer INSIDE the function is: " + customer); //Javi
    if (true) {
        const customer = "Gael"; //block scoping
        console.log("Customer INSIDE the block is: " + customer); //Gael    
    }

})();
console.log("Customer OUTSIDE the function is: " + customer);  //Javi