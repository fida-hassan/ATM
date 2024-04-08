#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 20000;
let myPin: number = 1512;


let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
    ]
);

//agar pin saahi hoto if condition run hoti ha 

if(pinAnswer.pin === myPin) {
    console.log("correct pin code!!");

    let operationAnswer = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please slect operation",
                type: "list",
                choices: ["withdraw" , "check balance"]
            }
        ]
    );

    console.log(operationAnswer);

    if(operationAnswer.operation === "withdraw") {
    let amountanswer = await inquirer.prompt(
        [
            {
                name:"amount",
                message: "enter your amount",
                type: "number",
            }
        ]
    );

    // some operations [=,-=,and +=]
    myBalance -= amountanswer.amount;
    console.log("your reaming balance is: " + myBalance);
    }
    else if
        (operationAnswer.operation === "check balance"){
            console.log("your balance ia: " +myBalance);
    }
}

// or agar pin galat hota ha to else ki condition chalti ha

else{
    console.log("incorrect pin number!!")
}