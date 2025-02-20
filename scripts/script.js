import {
  Pet,
  healthLevels,
  foodLevel,
  waterLevel,
  happinessLevel,
  energyLevel,
} from "./pet.js";

const pet = new Pet("blah");

const eatBtn = document.querySelector("#food-btn");
eatBtn.addEventListener("click", pet.eat);

const drinkBtn = document.querySelector("#water-btn");
drinkBtn.addEventListener("click", pet.drink);

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", pet.play);

const sleepBtn = document.querySelector("#sleep-btn");
sleepBtn.addEventListener("click", pet.sleep);

export const welcome = (name) => {
  new Typewriter(".info__text", {
    strings: `Say hello to your virtual friend, ${name}`,
    autoStart: true,
    cursor: null,
    delay: 60,
  }).deleteAll();
};

const errorEl = document.querySelector(".error");
const form = document.querySelector(".name-form");

const startGame = () => {
  const gameEl = document.querySelector("main");
  const landingEl = document.querySelector(".landing");
  gameEl.style.display = "block";
  landingEl.classList.add("landing--hidden");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  if (name.length === 0) {
    errorEl.innerText = "Please enter a name";
  } else {
    startGame();
    welcome(name);
  }
});

const healthScore = (healthLevels) => {
  setInterval(() => {
    let i = Math.floor(Math.random() * 4);
    console.log(
      (healthLevels[i] = healthLevels[i] - Math.floor(Math.random() * 3))
    );
    foodLevel.innerText = healthLevels[0];
    waterLevel.innerText = healthLevels[1];
    happinessLevel.innerText = healthLevels[2];
    energyLevel.innerText = healthLevels[3];
    console.log("decrease");
  }, 5000);
};

// healthScore(healthLevels);
