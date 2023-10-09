// ##### CHALLENGES #####

// 1. Let's create a simple game!
// 1.1. Create an object called "player" with the following properties:
// 1.1.1. name: ""
// 1.1.2. health: 100
// 1.1.3. weapon: "sword"
// 1.1.4. attack: function() { return Math.floor(Math.random() * 10) + 1; }

// 1.2. Create an object called "enemy" with the following properties:
// 1.2.1. name: ""
// 1.2.2. health: 100
// 1.2.3. weapon: "sword"
// 1.2.4. attack: function() { return Math.floor(Math.random() * 10) + 1; }

// 1.3. Create a function called "fight" that receives two parameters: "player" and "enemy".
// 1.3.1. The function should start with a while loop that runs while both "player" and "enemy" have health above 0.
// 1.3.2. Inside the loop, the "player" should attack the "enemy" and the "enemy" should attack the "player".
// 1.3.3. The damage should be calculated by calling the "attack" function of each object.
// 1.3.4. The "health" of each object should be decreased by the damage received.
// 1.3.5. After the loop, check who has the most health and display a message in the console.
// 1.3.6. If both have the same health, display a message in the console saying that it was a draw.

// 1.4. Call the "fight" function passing the "player" and "enemy" objects as parameters.

const player = {
    name: "Giovanna",
    health: 100,
    weapon: "sword",
    attack: function() {
        return Math.floor(Math.random() * 10) + 1;
    }
  }

  const enemy = {
    name: "Sara",
    health: 100,
    weapon: "sword",
    attack: function() {
        return Math.floor(Math.random() * 10) + 1;
    }
  }

  function fight (player, enemy) {

    while( player.health > 0 || enemy.health > 0){
      player.health -= enemy.attack()
      enemy.health -= player.attack()
    }
    console.log (enemy.health, "sara")
    console.log (player.health, "gio")

    if(player.health > enemy.health){
      console.log(`Você ganhou ${player.name} !! Parabéns 🎉 `)
    } else if (player.health === enemy.health){
      console.log ("empatou, jogue novamente")
    } else {
      console.log(`Poxa, o ${enemy.name} ganhou :( `)
    }
}

fight(player, enemy)