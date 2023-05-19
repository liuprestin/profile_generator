const readline = require("readline");

let profileInfo = {
    name: "",
    activity: "",
    music: ""
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (answer) => {
    profileInfo.name = answer;
  console.log(`Hello ${answer}`);
  rl.close();
});

rl.question("What's an activity you like doing? ", (answer) => {
    profileInfo.activity = answer;
  console.log(`${answer} sounds pretty cool`);
  rl.close();
});

rl.question("So, What do you listen to while doing that? ", (answer) => {
    profileInfo.music = answer
  console.log(`${answer} sounds pretty cool`);
  printProfile();
  rl.close();
});

function printProfile(){
    console.log(`${profileInfo.name} likes to listen to ${profileInfo.music} while ${profileInfo.activity}`)
}




