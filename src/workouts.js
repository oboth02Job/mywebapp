
// src/workouts.js
import { fetchExercises, fetchCategories } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const categoryContainer = document.querySelector("#category-filters");
  const searchInput = document.querySelector("#searchInput");
  const workoutContainer = document.querySelector("#workout-list");

  // Show loading
  workoutContainer.innerHTML = "<p>Loading workouts...</p>";

  // Fetch data
  const [workouts, categories] = await Promise.all([
    fetchExercises(),
    fetchCategories(),
  ]);

  // Display category filters (buttons)
  displayCategories(categories, categoryContainer, workouts, workoutContainer);

  // Initially, show all workouts
  displayWorkouts(workouts, workoutContainer);

  // Search input logic
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    // Filter workouts by name and current selected category
    const filteredByName = workouts.filter((w) =>
      w.name.toLowerCase().includes(term)
    );
    // Also apply category filter
    const currentCatId = categoryContainer.querySelector(
      ".category-btn.active"
    )?.dataset.id;
    let finalList = filteredByName;
    if (currentCatId && currentCatId !== "all") {
      finalList = filteredByName.filter(
        (w) => w.categoryId === currentCatId
      );
    }
    displayWorkouts(finalList, workoutContainer);
  });
});

function displayCategories(
  categories,
  container,
  workouts,
  workoutContainer
) {
  container.innerHTML = categories
    .map(
      (cat) => `
      <button class="category-btn" data-id="${cat.id}">
        ${cat.name}
      </button>`
    )
    .join("");

  // Add click events to each category button
  const btns = container.querySelectorAll(".category-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove "active" from all, then add to clicked
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedId = btn.dataset.id;

      if (selectedId === "all") {
        // Show all
        displayWorkouts(workouts, workoutContainer);
      } else {
        // Filter by category ID
        const filtered = workouts.filter(
          (w) => w.categoryId === selectedId
        );
        displayWorkouts(filtered, workoutContainer);
      }
    });
  });

  // Optionally, make “All” active by default
  const defaultBtn = container.querySelector('button[data-id="all"]');
  if (defaultBtn) {
    defaultBtn.classList.add("active");
  }
}

function displayWorkouts(workouts, container) {
  if (!workouts || workouts.length === 0) {
    container.innerHTML = "<p>No workouts found.</p>";
    return;
  }

  // Create HTML for each workout
  const html = workouts
    .map(
      (w) => `
      <div class="workout-item">
        <h3>${w.name}</h3>
        <p>${w.description || ""}</p>
      </div>
    `
    )
    .join("");

  container.innerHTML = html;
}





  // Event listener for each button
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      const id = e.target.dataset.id;
      const filtered = workouts.filter((w) => w.category.id == id);
      displayWorkouts(filtered, workoutContainer);
    }
  });


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