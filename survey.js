const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {;
  let name = answer;

rl.question("What's an activity you like doing? ", (answer1) => {
  let activity = answer1;

rl.question("What do you listen to while doing that? ", (answer2) => {
  let music = answer2;

rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer3) => {
  let meal = answer3;

rl.question("What's your favourite thing to eat for that meal? ", (answer4) => {
  let food = answer4;

rl.question("Which sport is your absolute favourite? ", (answer5) => {
  let sport = answer5;

rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer6) => {
  let superpower = answer6;

  console.log(`My name is ${name}. My favourite activity is ${activity} and while I am doing this activity I listen to ${music}. My favourite meal is ${meal} where I like to eat ${food}. I also enjoy ${sport}. I am amazing at ${superpower}.`)
  rl.close();
});
});
});
});
});
});
});