// Follow along with the examples here
function sayHelloToGuadalupe() {
    console.log ("Hello!, Guadalupe!");
}

sayHelloToGuadalupe()

function sayHelloToLiz() {
    console.log ("Hello!, Liz!");
}

sayHelloToLiz()

function sayHelloToSamip() {
    console.log ("Hello!, Samip!");
}

sayHelloToSamip()

//Separate

function say(greeting ,firstName) {
    console.log("firstname: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  
  say( "Julio", "Goodbye");

//Separate

function add(x, y) {
    return x + y;
}

console.log(add(80 ,9000));

//Separate

function say(greeting ,firstName) {
    console.log("I was called!");
    return(`${greeting}, ${firstName}!`);
  }
  
  console.log(say("Howdy", "Ivy"));