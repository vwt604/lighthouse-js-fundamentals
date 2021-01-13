const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 29;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

const temperatureTwo = 42

if (temperatureTwo < -40 || temperatureTwo > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

const raining = false

if (!raining) {
  console.log("Leave your umbrella at home!");
}