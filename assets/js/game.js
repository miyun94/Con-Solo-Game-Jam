let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]); 
console.log(enemyNames[3]); 

let fight = function(enemyNames) {
    while (playerHealth > 0 && enemyHealth > 0) {
  let promptFight = window.prompt("Would you like to FIGHT or SKIP this batte? Enter 'FIGHT' or 'SKIP' to choose.");

//if  player chooses to skip
if (promptFight === "skip" || promptFight === 'SKIP') {
    // confirm player wants to skip 
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money 
            playerMoney = playerMoney - 10; 
            console.log("playerMoney", playerMoney);
            break;
        }
    }
// remove enemy's health 
enemyHealth = enemyHealth - playerAttack; 
console.log(playerName + "attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

// check enemy's health 
if (enemyHealth <= 0) {
    window.alert(enemyNames + "has died!");

// award player money for winning
playerMoney = playerMoney + 20; 

//leave while() loop since enemy is dead 
break; 
} else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}

//remove player's health 
playerHealth = playerHealth - enemyAttack; 
console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!"); 
    break;
} 
else {
    window.alert(playerName + " still has" + playerHealth + " health left.");
}
}
};

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert('welcome to Robot Gladiators! Round ' + (i+1)); 

//pick new enemy to fight
        let pickedEnemyName = enemyNames[i]; 

//reset enemyHealth before starting new fight and use debugger to pause script
debugger; 

//pass the pickedEnemyName variable into the fight function 
fight(pickedEnemyName); 
    } else {
        window.alert('You have lost your robot in battle! Game over!')
    }
}

