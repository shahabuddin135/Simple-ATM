#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let user = {
  name:"shahabuddin",
  pin:"12345",
  balance:100000
};

console.log(chalk.bgGreenBright("PIN: 12345 "));

const atm = await inquirer.prompt([

  {
    name:"pin",
    type:"input",
    message:chalk.blue("Enter your Pin"),
  }

]);


if(user.pin == atm.pin){
console.log(chalk.bgGreenBright(`Welcome ${user.name}`));

  const answer = await inquirer.prompt([
    {
      name:"method",
      type:"list",
      choices:["Custom amount","Fast cash","Check balance"],
      message:"Select your withdraw method",
    }
  ]);

 if(answer.method === "Custom amount"){
  const customAmount = await inquirer.prompt([
    {
      name:"amount",
      type:"input",
      message:chalk.blue("Enter your desired amount")
    }
  ]);

  user.balance = user.balance - customAmount.amount;
  if(customAmount.amount > user.balance){
    console.log(chalk.bgRedBright("Insufficient Balance!"));
    
  }else{
  console.log(chalk.bgGreenBright(`You withdrew ${customAmount.amount}`));
  console.log(chalk.bgGreenBright(`Your current balance is ${user.balance}`));
  }

 }else if(answer.method === "Fast cash"){

  const fastCash = await inquirer.prompt([

    {
      name:"amount",
      type:"list",
      choices:["500","1000","3000","5000","10000"],
      message:"Select your desired amount"
    }
  ]);

  user.balance = user.balance - fastCash.amount;
  if(fastCash.amount > user.balance){

    console.log(chalk.bgRedBright("Insufficient Balance!"));
    
  }else{
  console.log(chalk.bgGreenBright(`You withdrew ${fastCash.amount}`));
  console.log(chalk.bgGreenBright(`Your current balance is ${user.balance}`));
  }

 }else if(answer.method === "Check balance"){
  console.log(chalk.bgGreenBright(`Your current balance is ${user.balance}`));
 }

 

}else{
  console.log(chalk.bgRed("Wrong Pin Try Again!")); 
}
