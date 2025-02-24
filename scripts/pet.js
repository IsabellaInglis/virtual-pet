import { getJoke } from "../lib/jokeApi.js";

const pet = document.querySelector(".pet__sprite");
export const healthLevels = [10, 10, 10, 10];
export const foodLevel = document.querySelector(".pet__food-level");
export const waterLevel = document.querySelector(".pet__water-level");
export const happinessLevel = document.querySelector(".pet__happiness-level");
export const energyLevel = document.querySelector(".pet__energy-level");

foodLevel.innerText = healthLevels[0];
waterLevel.innerText = healthLevels[1];
happinessLevel.innerText = healthLevels[2];
energyLevel.innerText = healthLevels[3];

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
    }, 3000);
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
    this.hungerLevel = healthLevels[0];
    this.waterLevel = healthLevels[1];
    this.energyLevel = healthLevels[2];
    this.happinessLevel = healthLevels[3];
  }

  eat() {
    let currentHunger = parseInt(foodLevel.innerText);
    if (currentHunger === 10) {
      const notHungry = `${this.name} is not hungry!`;
      showText(notHungry);
    } else {
      const hungry = `${this.name} is eating!`;
      showText(hungry);
      this.hungerLevel = currentHunger + 3;
      if (this.hungerLevel > 10) {
        foodLevel.innerText = 10;
        changeImg(this.name, "eating");
      } else {
        foodLevel.innerText = this.hungerLevel;
        changeImg(this.name, "eating");
      }
    }
  }

  drink() {
    const currentWater = parseInt(waterLevel.innerText);
    if (currentWater === 10) {
      const notThirsty = `${this.name} is not thirsty!`;
      showText(notThirsty);
    } else {
      const thirsty = `${this.name} is drinking!`;
      showText(thirsty);
      this.waterLevel = currentWater + 3;
      if (this.waterLevel > 10) {
        waterLevel.innerText = 10;
        changeImg(this.name, "eating");
      } else {
        waterLevel.innerText = this.waterLevel;
        changeImg(this.name, "eating");
      }
    }
  }

  play() {
    const currentHappiness = parseInt(happinessLevel.innerText);
    if (currentHappiness === 10) {
      const happy = `${this.name} doesn't need to play!`;
      showText(happy);
    } else {
      const playing = `${this.name} is playing!`;
      showText(playing);
      this.happinessLevel = currentHappiness + 3;
      if (this.happinessLevel > 10) {
        happinessLevel.innerText = 10;
        changeImg(this.name, "happy");
      } else {
        happinessLevel.innerText = this.happinessLevel;
        changeImg(this.name, "happy");
      }
    }
  }

  sleep() {
    const currentEnergy = parseInt(energyLevel.innerText);
    if (currentEnergy === 10) {
      const notTired = `${this.name} isn't tired!`;
      showText(notTired);
    } else {
      const sleeping = `Shhh, ${this.name} is sleeping!`;
      showText(sleeping);
      this.energyLevel = currentEnergy + 3;
      if (this.energyLevel > 10) {
        energyLevel.innerText = 10;
        changeImg(this.name, "sleeping");
      } else {
        energyLevel.innerText = this.energyLevel;
        changeImg(this.name, "sleeping");
      }
    }
  }
}
