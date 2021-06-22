//Alert function tells the browser to display a message
//To run a Javascript function we must always include parentheses even if there is nothing between them
//Passing an argument : placing content between the parentheses
//Semicolor closes out function's code aka its completed
//Expression : each piece of code separated by semicolons
//Variable : named location for a value that gets stored in the browser's memory when a program is run

//this creates a function named "fight"
//declare : create and give function a name
// function fight(){
//     window.alert("The fight has begun!")
// }


let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100; 
let playerAttack = 10; 
let playerMoney = 10; 

console.log(playerName, playerHealth, playerAttack); 

let enemyName = "Roborto"; 
let enemyHealth = 50;  
let enemyAttack = 12; 

let fight = function(){
    //alert player that they are starting the round
    window.alert("Welcome to Robot Gladiators"); 

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 

    if(promptFight === 'fight' || promptFight === "FIGHT"){
    //subtract the value of 'playerAttack' from the value of 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack; 

    //log a resulting message to console
    console.log(playerName + " attacked " +  enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //check enemy's health using a control flow statement 
    if(enemyHealth <= 0 ){
        window.alert(enemyName + " has died"); 
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left"); 
    }

    //subtract the value of 'enemyAttack; fro the value of 'playerHealth'
    playerHealth = playerHealth - enemyAttack; 

    //log a resulting message to the console 
    console.log(enemyName + " attacked" + playerName + ". " + playerName + " now has " + playerHealth); 

    //check player's health
    if (playerHealth <= 0){
        window.alert(playerName + " has died!"); 
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left."); 
    }
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip 
    let confirmSkip = window.confirm("Are you sure you'd like to quit?"); 

    //if yes, leave fight
    if (confirmSkip){
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2; 
        console.log(playerName + " now has " + playerMoney + " remaining."); 
    } 
    //if no, ask question again by running fight()
    else {fight(); 
    }
    window.alert(playerName + " has chosen to skip the fight!")
} else {
    window.alert("You need to choose a valid option! Try again!"); 
}
}; 

//have to call the function for it to run
fight(); 