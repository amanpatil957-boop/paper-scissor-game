let userScore=0;
let CompScore=0;
const choices=document.querySelectorAll(".choice");//both are different
const msg=document.querySelector("#msg");//both are different
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors//random strings karna possible nhi hai put number hai
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
     msg.innerText="Game was draw play again";
     msg.style.backgroundColor="yellow";
}
const shoWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText =userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }else{
        CompScore++;
          compScorepara.innerText =CompScore;
         msg.innerText="You lost.";
         msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice)=>{
    console.log("userChoice=",userChoice);
    //Generate comp choice -> modular way of writing a program//means making function for single action
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"?false:true
        }else{
            //rock,paper
           userWin= compChoice==="rock"?false:true;

        
        }
        shoWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

        

    });
});