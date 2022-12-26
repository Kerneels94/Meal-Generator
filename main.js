// Get dom elements

const mealHeading = document.querySelector('[data-key="meal-heading"]');
const description = document.querySelector('[data-key="description"]');
const duration = document.querySelector('[data-key="duration"]');
const listItem = document.querySelector('[data-key="list-item"]');
const image = document.querySelector('[data-key="image"]');

const mealContainer = document.querySelector(".container");
const generateButton = document.querySelector('[data-key="generate"]');

/*
Create object to store the data of the meal
Create function to create the meal
Add eventlistener to the click button that will with every click call the meal function
*/

const meal = [
  {
    image: "./assets/hamburger.jpg",
    heading: "Hamburger",
    description: "A delicious meal",
    duration: "30 min",
    ingredients: [
      "Bread",
      "Meat",
      "Fried Onions",
      "Tamatoes",
      "Cheese",
      "Butter",
    ],
  },
  {
    image: "./assets/eggSandwich.jpg",
    heading: "Egg Sandwitch",
    description: "A delicious meal",
    duration: "10 min",
    ingredients: ["Egg", "Bread", "Butter"],
  },
  {
    image: "./assets/muffin.jpg",
    heading: "Muffen",
    description: "A delicious meal",
    duration: "60 min",
    ingredients: ["5 Eggs", "Milk", "", "Tamatoes", "Cheese", "Butter"],
  },
];

// Counter
let counter = 0;

// Functions

function generateMeal(mealItem) {
  let item = meal[mealItem];
  image.src = item.image;
  mealHeading.textContent = item.heading;
  description.textContent = item.description;
  duration.textContent = item.duration;
  listItem.textContent = item.ingredients;
}

function randomMeal() {
  counter = Math.floor(Math.random() * meal.length);
  generateMeal(counter);
}

// EventListerners
window.addEventListener("DOMContentLoaded", function () {
  let firstItem = meal[counter];
  image.src = firstItem.image;
  mealHeading.textContent = firstItem.heading;
  description.textContent = firstItem.description;
  duration.textContent = firstItem.duration;
  listItem.textContent = firstItem.ingredients;
});
generateButton.addEventListener("click", randomMeal);
