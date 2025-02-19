const eatingOrDrinking = () => {
  const pet = document.querySelector(".pet__sprite");
  pet.src = "../assets/gifs/eating.gif";
  setInterval(() => {
    pet.src = "../assets/gifs/default.gif";
  }, 2000);
};

const sleeping = () => {
  const pet = document.querySelector(".pet__sprite");
  pet.src = "../assets/gifs/sleeping.gif";
  setInterval(() => {
    pet.src = "../assets/gifs/default.gif";
  }, 5000);
};

const playing = () => {
  const pet = document.querySelector(".pet__sprite");
  pet.src = "../assets/gifs/happy.gif";
  setInterval(() => {
    pet.src = "../assets/gifs/default.gif";
  }, 3000);

  // add interval for gif to change so joke can be told
};

export class Pet {
  constructor(name) {
    this.name = name;
    this.hungerLevel = 10;
    this.thirstLevel = 10; // will depend on location
    this.energyLevel = 10; // will depend on time of day?
    this.happiness = 10;
  }

  eat() {
    console.log(this.name + " is eating");
    this.hungerLevel += 3;
    this.happiness += 1;
    this.energyLevel += 1;
    this.thirstLevel -= 2;
    eatingOrDrinking();
  }

  drink() {
    console.log(this.name + " is drinking");
    this.happiness += 2;
    this.energyLevel += 1;
    this.thirstLevel += 5;
    eatingOrDrinking();
  }

  play() {
    console.log(this.name + " is playing");
    this.hungerLevel -= 2;
    this.happiness += 5;
    this.energyLevel -= 3;
    this.thirstLevel -= 2;
    playing();
  }

  sleep() {
    console.log("Shhh " + this.name + " is sleeping!");
    this.happiness += 1;
    this.energyLevel += 6;
    sleeping();
    // if night - sleep for longer?
  }
}
