// Get dom elements

const generateButton = document.querySelector('[data-key="generate"]');
const mealContainer = document.querySelector(".container");

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

let counter = 0;

// Functions
const firstMeal = () => {
  // Get the first item of the array
  let firstItem = meal[counter];
  // Update meal container
  mealContainer.innerHTML = `<div class="container">
          <img src="${firstItem.image}" alt="Image" data-key="image" />
          <h2 data-key="meal-heading">${firstItem.heading}</h2>
          <p data-key="description">${firstItem.description}</p>
          <span data-key="duration" class="duration">Duration: ${firstItem.duration}</span>
          <ul class="list">
            <li data-key="list-item">${firstItem.ingredients[0]}</li>
            <li data-key="list-item">${firstItem.ingredients[1]}</li>
            <li data-key="list-item">${firstItem.ingredients[2]}</li>
            <li data-key="list-item">${firstItem.ingredients[3]}</li>
            <li data-key="list-item">${firstItem.ingredients[4]}</li>
            <li data-key="list-item">${firstItem.ingredients[5]}</li>
          </ul>
        </div>`;
};

// Generate random meal
const generateRandomMeal = () => {
  //Loop through the meal array
  let randomMeal = meal.map((item) => {
    return `
      <div class="container">
            <img src="${item.image}" alt="Image" data-key="image" />
            <h2 data-key="meal-heading">${item.heading}</h2>
            <p data-key="description">${item.description}</p>
            <span data-key="duration" class="duration">${item.duration}</span>
            <ul class="list">
               <li data-key="list-item">${item.ingredients[0]}</li>
            <li data-key="list-item">${item.ingredients[1]}</li>
            <li data-key="list-item">${item.ingredients[2]}</li>
            <li data-key="list-item">${item.ingredients[3]}</li>
            <li data-key="list-item">${item.ingredients[4]}</li>
            <li data-key="list-item">${item.ingredients[5]}</li>
            </ul>
          </div>
      `;
  });
  //   add array elements together
  randomMeal = randomMeal.join("");
  //   Update the innerHTML of the mealContainer
  mealContainer.innerHTML = randomMeal;
};

// EventListerners
generateButton.addEventListener("click", generateRandomMeal);
window.addEventListener("DOMContentLoaded", firstMeal);
