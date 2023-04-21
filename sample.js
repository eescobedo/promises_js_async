console.log("I");


setTimeout(() => {
    console.log("eat");
}, 2000);

console.log("Ice Cream");

function one(){
    console.log("call one function");
};

function two(callOne){
    console.log("call two function");
    callOne();
}

two(one);