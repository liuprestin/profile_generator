const readline = require("readline");

let profile = "";
let profileInfo = {
  name: "",
  activity: "",
  music: "",
};

function question(sentence) {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  return new Promise(resolve =>
      rl.question(sentence, answer => {
          rl.close();
          resolve(answer);
      })
  );
}

async function survey() {
  profileInfo.name = await question("What is your name?");
  profileInfo.activity = await question("what is your favourite activity?");
  profileInfo.music = await question("what is your favourite music?")

  profile = `${profileInfo.name} likes to listen to ${profileInfo.music} while doing ${profileInfo.activity} `

  console.log(profile);
}

survey();