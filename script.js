console.log("");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userName;

const magic8Ball = () => {
  const randomNum = Math.floor(Math.random() * 9);
  const answers = () => {
    let answer = "";
    if (randomNum === 0) {
      answer = "It is certain.";
    } else if (randomNum === 1) {
      answer = "My sources say no.";
    } else if (randomNum === 2) {
      answer = "Reply hazy, try again.";
    } else if (randomNum === 3) {
      answer = "You may rely on it.";
    } else if (randomNum === 4) {
      answer = "Outlook not so good.";
    } else if (randomNum === 5) {
      answer = "Cannot predict right now.";
    } else if (randomNum === 6) {
      answer = "As I see it, yes.";
    } else if (randomNum === 7) {
      answer = "Don't count on it.";
    } else {
      answer = "Ask again later.";
    }
    console.log(`Answer: ${answer}`);
  };

  const getName = () => {
    if (!userName) {
      readline.question("What is your name? ", (name) => {
        userName = name;
        console.log(
          `Hello ${userName}, I am the Magic 8 Ball. Ask me a question.`
        );
        askQuestion();
      });
    } else {
      askQuestion();
    }
  };

  const askQuestion = () => {
    readline.question("Question: ", (userQuestion) => {
      if (userQuestion) {
        answers();
        magic8Ball();
      } else {
        magic8Ball();
      }
    });
  };
  getName();
};
magic8Ball();
