import { fetchNutrition } from "./nutrition.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#mealForm");
  const input = document.querySelector("#mealInput");
  const results = document.querySelector("#nutritionResults");
  const total = document.querySelector("#dailyTotal");

  let dailyCalories = 0;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const meal = input.value.trim();
    if (!meal) return alert("Please enter a meal");

    results.innerHTML = "<p>Loading nutrition info...</p>";

    const foods = await fetchNutrition(meal);
    if (foods.length === 0) {
      results.innerHTML = "<p>No results found.</p>";
      return;
    }

    displayMealResults(foods, results);

    // Add total calories
    foods.forEach(f => dailyCalories += f.nf_calories);
    total.textContent = `total Calories Today: ${dailyCalories.toFixed(0)} kcal;`

    input.value = "";
  });
});

function displayMealResults(foods, container) {
  container.innerHTML = foods.map(food => `
    <div class="meal-card">
      <h3>${food.food_name}</h3>
      <p><strong>Calories:</strong> ${food.nf_calories} kcal</p>
      <p><strong>Protein:</strong> ${food.nf_protein} g</p>
      <p><strong>Carbs:</strong> ${food.nf_total_carbohydrate} g</p>
      <p><strong>Fat:</strong> ${food.nf_total_fat} g</p>
    </div>
  `).join("");
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#profileForm");
  const summary = document.querySelector("#profileSummary");

  // Load saved data
  const savedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

  // Fill form if data exists
  if (Object.keys(savedProfile).length > 0) {
    document.querySelector("#name").value = savedProfile.name || "";
    document.querySelector("#age").value = savedProfile.age || "";
    document.querySelector("#goal").value = savedProfile.goal || "";
    document.querySelector("#calories").value = savedProfile.calories || "";
    document.querySelector("#workout").value = savedProfile.workout || "";

    showSummary(savedProfile);
  }

  // Save data on submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const profile = {
      name: document.querySelector("#name").value,
      age: document.querySelector("#age").value,
      goal: document.querySelector("#goal").value,
      calories: document.querySelector("#calories").value,
      workout: document.querySelector("#workout").value,
    };

    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify(profile));

    showSummary(profile);
  });

  function showSummary(profile) {
    summary.innerHTML = `
      <h3>Profile Summary</h3>
      <p><strong>Name:</strong> ${profile.name}</p>
      <p><strong>Age:</strong> ${profile.age}</p>
      <p><strong>Goal:</strong> ${profile.goal}</p>
      <p><strong>Calorie Target:</strong> ${profile.calories}</p>
      <p><strong>Preferred Workout:</strong> ${profile.workout}</p>
    `;
  }
});
