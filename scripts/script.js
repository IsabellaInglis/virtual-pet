import { Pet } from "./pet.js";

const errorEl = document.querySelector(".landing__name-form__error");
const form = document.querySelector(".landing__name-form");

const healthScore = (pet) => {
  setInterval(() => {
    const healthKeys = Object.keys(pet.levelDisplays);
    let i = Math.floor(Math.random() * healthKeys.length);
    const key = healthKeys[i];
    const decreaseAmount = Math.floor(Math.random() * 3);

    pet.decreaseHealth(key, decreaseAmount);
  }, 7000);
};

const startGame = (name) => {
  const gameEl = document.querySelector("main");
  const landingEl = document.querySelector(".landing");
  gameEl.style.display = "block";
  landingEl.classList.add("landing--hidden");

  new Typewriter(".info__text", {
    strings: `Say hello to your virtual friend, ${name}`,
    autoStart: true,
    cursor: null,
    delay: 60,
  }).deleteAll();

  const pet = new Pet(name);

  healthScore(pet);

  const eatBtn = document.querySelector("#food-btn");
  eatBtn.addEventListener("click", () => {
    pet.eat();
  });

  const drinkBtn = document.querySelector("#water-btn");
  drinkBtn.addEventListener("click", () => {
    pet.drink();
  });

  const playBtn = document.querySelector("#play-btn");
  playBtn.addEventListener("click", () => {
    pet.play();
  });

  const sleepBtn = document.querySelector("#sleep-btn");
  sleepBtn.addEventListener("click", () => {
    pet.sleep();
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  if (name.length === 0) {
    errorEl.innerText = "Please enter a name";
  } else {
    startGame(name);
  }
});
