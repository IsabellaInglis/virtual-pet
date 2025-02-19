import { Pet } from "./pet.js";

const pet = new Pet("blah");

const eatBtn = document.querySelector("#food-btn");
eatBtn.addEventListener("click", pet.eat);

const drinkBtn = document.querySelector("#water-btn");
drinkBtn.addEventListener("click", pet.drink);

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", pet.play);

const sleepBtn = document.querySelector("#sleep-btn");
sleepBtn.addEventListener("click", pet.sleep);
