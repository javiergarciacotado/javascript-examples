function taxES5(income, state) {
    state = state || "UK"; //default value for state will be "UK"
    
    console.log("calculating tax for: " + state);
}

taxES5(10000);

function taxES6(income, state = "Florida") { //default value for state
    state = state || "UK";
    
    console.log("calculating tax for: " + state); 
}

taxES6(10000);