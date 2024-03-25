import inquirer from "inquirer"

const answer = await inquirer.prompt([{message: "Enter first number", type: "number", name:"firstnumber" },

{message: "Enter scond number", type: "number", name:"secondnumber" },
{message: "select one of the opreator to perform action", type: "list", name: "operator", choices: ["addition","subtraction","multiplication","division"], }
]);


//agar string mai kch bhi likhy gy to ye perform nhi kry ga opreators k sth is lie isy sting ky bagair krna pardega



console.log(answer);

//condtional statment

if (answer.operator === "addition"){
    console.log( + answer.firstnumber + answer.secondnumber);
}
    else if (answer.operator === "subtraction"){
        console.log( - answer.firstnumber - answer.secondnumber);

     } else if (answer.operator === "multiplication"){
            console.log(  answer.firstnumber * answer.secondnumber);

     }
            else if (answer.operator === "multiplication"){
                console.log(  answer.firstnumber * answer.secondnumber);

            }
                else if (answer.operator === "division"){
                    console.log(  answer.firstnumber / answer.secondnumber);
    
                  }  else {

                console.log("Please Select Valid Operator")
    

                  }