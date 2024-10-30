// index.js
// Main JavaScript file for the Abgerny Incredibox game

document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Abgerny Incredibox!");

  // Abgerny characters and their associated sounds
  const characters = [
    { name: "Echo", sound: "beat", color: "blue" },
    { name: "Vibe", sound: "melody", color: "green" },
    { name: "Buzz", sound: "effect", color: "purple" },
    { name: "Harmony", sound: "vocals", color: "orange" }
    // Add more characters as needed
  ];

  // Initialize game characters
  const initializeGame = () => {
    const container = document.getElementById("character-container");
    characters.forEach(character => {
      const charElem = document.createElement("div");
      charElem.className = "character";
      charElem.style.backgroundColor = character.color;
      charElem.innerText = character.name;
      charElem.onclick = () => playSound(character.sound);
      container.appendChild(charElem);
    });
  };

  // Play sound associated with character
  const playSound = (soundType) => {
    console.log(`Playing ${soundType} sound!`);
    // Sound logic goes here (add sound assets)
  };

  initializeGame();
});
