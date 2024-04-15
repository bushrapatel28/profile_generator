const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  let profilePara = [];
  profilePara.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    profilePara.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      profilePara.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profilePara.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profilePara.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profilePara.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profilePara.push(answer);

              console.log(`\nThank you for your valuable feedback ${profilePara[0]}! ${profilePara[1]} sounds like a great activity to do while listening to ${profilePara[2]}. Your favourite meal is ${profilePara[3]} and to eat ${profilePara[4]} for that meal. Your favourite sport is ${profilePara[5]} and you possess an amazing superpower of ${profilePara[6]}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});