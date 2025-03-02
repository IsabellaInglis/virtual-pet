import { getJoke } from "../lib/jokeApi.js";

const pet = document.querySelector(".pet__sprite");
export const initialHealthLevels = [3, 3, 3, 3];
export const hungerLevel = document.querySelector(".pet__food-level");
export const waterLevel = document.querySelector(".pet__water-level");
export const happinessLevel = document.querySelector(".pet__happiness-level");
export const energyLevel = document.querySelector(".pet__energy-level");

hungerLevel.innerText = initialHealthLevels[0];
waterLevel.innerText = initialHealthLevels[1];
happinessLevel.innerText = initialHealthLevels[2];
energyLevel.innerText = initialHealthLevels[3];

const showText = (text) => {
  new Typewriter(".info__text", {
    strings: text,
    autoStart: true,
    cursor: "",
    delay: 60,
  }).deleteAll();
};

let lastTimeoutId;

const changeImg = (name, action) => {
  if (action === "happy") {
    clearTimeout(lastTimeoutId);
    getJoke();
    setTimeout(() => {
      pet.src = `../assets/gifs/${action}.gif`;
    }, 5000);
    lastTimeoutId = setTimeout(() => {
      pet.src = "../assets/gifs/default.gif";
      const text = `${name} loved your joke!`;
      showText(text);
    }, 5000);
  } else {
    clearTimeout(lastTimeoutId);
    pet.src = `../assets/gifs/${action}.gif`;

    lastTimeoutId = setTimeout(() => {
      pet.src = "../assets/gifs/default.gif";
    }, 2000);
  }
};

export class Pet {
  constructor(name) {
    this.name = name;
    this.hungerLevel = initialHealthLevels[0];
    this.waterLevel = initialHealthLevels[1];
    this.happinessLevel = initialHealthLevels[2];
    this.energyLevel = initialHealthLevels[3];

    this.levelDisplays = {
      hunger: hungerLevel,
      water: waterLevel,
      happiness: happinessLevel,
      energy: energyLevel,
    };
  }

  updateHealth(key, feeling, changeAmount, action) {
    let currentLevel = parseInt(this.levelDisplays[key].innerText);

    if (currentLevel === 10) {
      if (this[key] === "happy") {
        showText(`${this.name} doesn't want to play!`);
        return;
      }
      showText(`${this.name} is not ${feeling}!`);
      return;
    }

    const actionText = `${this.name} is ${action}!`;
    showText(actionText);

    this[key] = Math.min(10, currentLevel + changeAmount);
    console.log(this[key]);
    this.levelDisplays[key].innerText = this[key];

    changeImg(this.name, action);
  }

  eat() {
    this.updateHealth("hunger", "hungry", 3, "eating");
  }

  drink() {
    this.updateHealth("water", "thirsty", 3, "drinking");
  }

  play() {
    this.updateHealth("happiness", "bored", 3, "happy");
  }

  sleep() {
    this.updateHealth("energy", "tired", 3, "sleeping");
  }
}
