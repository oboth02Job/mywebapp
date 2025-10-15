
import { fetchExercises } from "./api.js"; 

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#workout-list");
  const searchInput = document.querySelector("#searchInput");

  //Show loading messages
  container.innerHTML = "<p>Loading Workouts...</p>"

  //Fetch workouts
  const workouts = await fetchExercises();

  //Display Workouts
  displayWorkouts(workouts, container);

  //Search Filter Logic
  searchInput.addEventListener("input", async e => {
    const term = e.target.value.toLowerCase()
    const filtered = workouts.filter((w) => workouts.name.toLowerCase().includes(term));

    displayWorkouts(filtered, container);
  })
}) 

//Display workouts in the DOM 
function displayWorkouts(list, container) {
  if(list.length === 0) {
    container.innerHTML = "<p>No workouts found</p>";
    return;
  }

  container.innerHTML = list.map(workout => `
    <div class="workout-card">
      <h3>${workout.name}</h3>
      <p>${workout.description ? workout.description : "No description available."}</p>
      <p><strong>Muscle Group:</strong> ${workout.category?.name || "N/A"}</p>
    </div>
  `).join("");
}



import { fetchExercises, fetchCategories } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector("#workout-list");
  const categoryContainer = document.querySelector("#category-filters");
  const searchInput = document.querySelector("#searchInput");

  container.innerHTML = "<p>Loading workouts...</p>";

  // Fetch workouts and categories
  const [workouts, categories] = await Promise.all([
    fetchExercises(),
    fetchCategories(),
  ]);

  // Display category filter buttons
  displayCategories(categories, categoryContainer, workouts, container);

  // Display all workouts initially
  displayWorkouts(workouts, container);

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = workouts.filter((w) =>
      w.name.toLowerCase().includes(term)
    );
    displayWorkouts(filtered, container);
  });
});

// Display category filter buttons
function displayCategories(categories, container, workouts, workoutContainer) {
  container.innerHTML = categories
    .map(
      (cat) => `
      <button class="category-btn" data-id="${cat.id}">
        ${cat.name}
      </button>`
    )
    .join("");

  // Event listener for each button
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      const id = e.target.dataset.id;
      const filtered = workouts.filter((w) => w.category.id == id);
      displayWorkouts(filtered, workoutContainer);
    }
  });
}

// Display workouts
function displayWorkouts(list, container) {
  if (list.length === 0) {
    container.innerHTML = "<p>No workouts found</p>";
    return;
  }

  container.innerHTML = list
    .map(
      (workout) => `
    <div class="workout-card">
      <h3>${workout.name}</h3>
      <p>${workout.description || "No description available."}</p>
      <p><strong>Muscle Group:</strong> ${
        workout.category ? workout.category.name : "N/A"
      }</p>
    </div>`
    )
    .join("");
}