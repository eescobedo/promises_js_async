let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

// Function 1
let order = (fruit_name, call_production) => {
    console.log("Order placed. Please call production");

    call_production();
};

// Function 2
let production = () => {
    console.log("Production has started");
};

// name of our second function, Trigger
order("", production);
