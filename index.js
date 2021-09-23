var readlineSync = require("readline-sync");

var chalk = require("chalk");

var score =0;

var userName = readlineSync.question("May I know your name, please! ").toUpperCase();

console.log("\n",chalk.cyan(userName)+ ", be the "+chalk.yellow("GOLDEN SNITCH")+" in the world of quaffles!"+chalk.magenta("\n\n**************** Let's the wizardry begin ****************"));


var highScore=[{
  name:"Rachit",
  score:4
},{
  name:"Runjhun",
  score:3
}]

function goldenSnitch(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Incendio,",userName+"!"));
    score++;
  }
  else{
    console.log(chalk.red("You need some")+chalk.yellow(" Felix Felicis!!"));
    score--;
  }
  console.log(chalk.blue("Your current score is: ", score));
  console.log("----------------")

  for(var i=0;i<highScore.length;i++){
    if(score>highScore[i].score){
      console.log(chalk.magenta("\n    YAY!!! This is a new high score"));
      console.log(chalk.magenta("***** You are a Potterhead indeed! *****"));
      highScore[i].name=userName;
      highScore[i].score=score;
      break;
    }
  }
}

var questions=[{
  question:`1. What spell did Harry use to kill Lord Voldemort?
  a)Expelliarmus
  b)Expecto Patronum
  c)Avada Kedavra
      `,
  answer:"b"
},{
  question:`2. Which element is associated with Hufflepuff?
  a)Fire
  b)Earth
  c)Air
      `,
  answer:"a"
},{
  question:`3. What was the name of the Black family’s house elf?
  a)Dobby
  b)Winky
  c)Honkey
      `,
  answer:"a"
},{
  question:`4. What is a thestral?
  a)A half-giant
  b)An invisible winged horse
  c)A pixie
      `,
  answer:"b"
}
]

for(var i=0;i<questions.length;i++){
  console.log("\n");
  goldenSnitch(questions[i].question, questions[i].answer);
}
 console.log("\n \n:::::::::: Potterheads with top scores ::::::::::");
  for(var i=0;i<highScore.length;i++){
    console.log("\n"+"Name: "+highScore[i].name.toUpperCase());

    console.log("Score: "+highScore[i].score);
    console.log("---------------------")
  }


