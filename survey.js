const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  let answers = [];
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              answers.push(answer);

              console.log(`\nThank you for your valuable feedback ${answers[0]}! ${answers[1]} sounds like a great activity to do while listening to ${answers[2]}. Your favourite meal is ${answers[3]} and to eat ${answers[4]} for that meal. Your favourite sport is ${answers[5]} and you possess an amazing superpower of ${answers[6]}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});