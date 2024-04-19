#! usr/bin/env node 
import inquirer from "inquirer"
const currency:any={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
  
};

let answer= await inquirer.prompt(
    [
    {
        name:"from",
        message:"Enter from Currency",
        type:"list",
        choices:["USD","PKR","INR","GBP","EUR"]
    },
    {
        name:"to",
        message:"Enter to Currency",
        type:"list",
        choices:["USD","PKR","INR","GBP","EUR"]
    },
    {
        name:"amount",
        message:"Enter your Amount",
        type:"number",
  
    },
]
)
let fromAmount=currency[answer.from]
let toAmount=currency[answer.to]
let amount=answer.amount
let baseAmount=amount/fromAmount
let covertAmount=baseAmount*toAmount
console.log(covertAmount)
