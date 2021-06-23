//Alert function tells the browser to display a message
//To run a Javascript function we must always include parentheses even if there is nothing between them
//Passing an argument : placing content between the parentheses
//Semicolor closes out function's code aka its completed
//Expression : each piece of code separated by semicolons
//Variable : named location for a value that gets stored in the browser's memory when a program is run
//Primitive Data : data that only holds one value such as a string, number, or boolean
//Objects : looser term for a data type that can store more than one value of data such as Arrays

//this creates a function named "fight"
//declare : create and give function a name
// function fight(){
//     window.alert("The fight has begun!")
// }

//Game States
//"Win" - player robot has defeated all enemy-robots
//  *fight all enemy-robots
//  *defeat each enemy-robot
//"Lose" - player robot's health is zero or less

let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100; 
let playerAttack = 10; 
let playerMoney = 10; 

console.log(playerName, playerHealth, playerAttack); 

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
let enemyHealth = 50;  
let enemyAttack = 12; 

//displays first name in the list ; arrays always starts at 0
//console.log(enemyNames[0]); 
//displays the number of items in the list i.e. 3 in our case
// console.log(enemyNames.length); 

//Initial Expression : let i=0 ; first statement excuted, initializing the loop iterator or counter
//Condition Statement : i < 3 ; if this condition evaluates to true, the loop statement execute
//Increment Expression : i++ ; after the iterator increments, the condition is then reevaluated and continues the loop chain
// for(let i=0; i<enemyNames.length; i++){
//     console.log(enemyNames[i]); 
// }

//Parameter: variable placeholder in the function definition
let fight = function(enemyName){
  //repeat and execute as long as the enemy robot is alive
  while(playerHealth > 0 && enemyHealth > 0 ){

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip 
        let confirmSkip = window.confirm("Are you sure you'd like to quit?"); 
    
        //if yes, leave fight
        if (confirmSkip){
        window.alert(playerName + ' has decided to skip this fight. Goodbye!'); 
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10; 
            console.log("playerMoney", playerMoney); 
            break; 
        } 
    }
  
    //subtract the value of 'playerAttack' from the value of 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack; 
    //log a resulting message to console
    console.log(playerName + " attacked " +  enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //check enemy's health using a control flow statement 
    if(enemyHealth <= 0 ){
        window.alert(enemyName + " has died"); 

        //award player money for winning
        playerMoney = playerMoney + 20; 

        //leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left"); 
    }

    //subtract the value of 'enemyAttack; fro the value of 'playerHealth'
    playerHealth = playerHealth - enemyAttack; 
    //log a resulting message to the console 
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth); 

    //check player's health
    if (playerHealth <= 0){
        window.alert(playerName + " has died!"); 
        break; 
        //break allows us to exit current loop
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left."); 
    }
}
}; 

//have to call the function for it to run
//fight each enemy robot by looping over them and fighting them one at a time
//function to start a new game
let startGame = function(){
    //reset player stats
    playerHealth = 100; 
    playerAttack = 10; 
    playerMoney = 10; 

for( let i=0; i < enemyNames.length; i++ ){
    if(playerHealth>0){
        window.alert('Welcome to Robot Gladiators! Round ' + (i+1)); 

//pick new enemy to fight based off the index of the enemyNames array 
        let pickedEnemyName = enemyNames[i]; 
        enemyHealth = 50; 
        //pass pickedEnemyName variable value into the fight function where it will assume the value of the enemyName parameter
        fight(pickedEnemyName); 

        //if player is still alive and we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length -1 ){
            let storeConfirm = window.confirm("The fight is over, visit the store before the next round?"); 

            //if yes then take them to the store() function
            if(storeConfirm){
                shop(); 
            }
        }
} else {
    //if player isn't alive, stop the game
    window.alert('You have lost your robot in battle! Game over!'); 
    break; 
}
}
//play again
endGame(); 
}; 


//function to end the entire game
let endGame = function(){
    window.alert("The game has now ended. Let's see how you did!")
    //if player is still alive, player wins
    if (playerHealth>0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + "."); 
    } else {
    window.alert("You've lost your robot in battle")
    }

    //ask player if they'd like to play again 
    let playerAgainConfirm = window.confirm("Would you like to play again?"); 

    if (playerAgainConfirm){
        //restart game
        startGame(); 
    } else {
        window.alert("Thank you for playing")
    }
}; 

