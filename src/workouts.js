const workouts = [
  { name: "Jumping Jacks", duration: "2 min", type: "Cardio" },
  { name: "Push-ups", duration: "3 sets of 15 reps", type: "Strength" },
  { name: "Plank", duration: "1 min", type: "Core" },
  { name: "Squats", duration: "3 sets of 20 reps", type: "Strength" },
  { name: "Burpees", duration: "1 min", type: "Cardio" },
  { name: "Lunges", duration: "3 sets of 12 reps per leg", type: "Strength" },
  { name: "Mountain Climbers", duration: "1 min", type: "Cardio" },
  { name: "Bicycle Crunches", duration: "2 min", type: "Core" },
  { name: "High Knees", duration: "1 min", type: "Cardio" },
  { name: "Leg Raises", duration: "3 sets of 15 reps", type: "Core" },
  { name: "Russian Twists", duration: "3 sets of 20 reps", type: "Core" },
  { name: "Deadlifts", duration: "3 sets of 10 reps", type: "Strength" },
  { name: "Bench Press", duration: "3 sets of 8 reps", type: "Strength" },
  { name: "Pull-ups", duration: "3 sets of 6 reps", type: "Strength" },
  { name: "Dumbbell Curls", duration: "3 sets of 12 reps", type: "Strength" },
  { name: "Tricep Dips", duration: "3 sets of 15 reps", type: "Strength" },
  { name: "Shoulder Press", duration: "3 sets of 10 reps", type: "Strength" },
  { name: "Running", duration: "30 min", type: "Cardio" },
  { name: "Cycling", duration: "45 min", type: "Cardio" },
  { name: "Jump Rope", duration: "5 min", type: "Cardio" },
  { name: "Yoga Flow", duration: "20 min", type: "Flexibility" },
  { name: "Downward Dog", duration: "1 min", type: "Flexibility" },
  { name: "Child’s Pose", duration: "2 min", type: "Flexibility" },
  { name: "Cat-Cow Stretch", duration: "1 min", type: "Mobility" },
  { name: "Hip Circles", duration: "1 min", type: "Mobility" },
  { name: "Arm Circles", duration: "1 min", type: "Mobility" },
  { name: "Wall Sits", duration: "1 min", type: "Strength" },
  { name: "Box Jumps", duration: "3 sets of 10 reps", type: "Cardio" },
  { name: "Step-Ups", duration: "3 sets of 12 reps", type: "Strength" },
  { name: "Glute Bridges", duration: "3 sets of 15 reps", type: "Core" },
  { name: "Side Plank", duration: "45 sec per side", type: "Core" },
  { name: "Toe Touch Stretch", duration: "2 min", type: "Flexibility" },
  { name: "Seated Forward Bend", duration: "2 min", type: "Flexibility" },
  { name: "Butterfly Stretch", duration: "2 min", type: "Flexibility" },
  { name: "Walking Lunges", duration: "3 sets of 20 steps", type: "Strength" },
  { name: "Treadmill Walk", duration: "20 min", type: "Cardio" },
  { name: "Elliptical Trainer", duration: "25 min", type: "Cardio" },
  { name: "Farmers Walk", duration: "3 sets of 1 min", type: "Strength" },
  { name: "Kettlebell Swings", duration: "3 sets of 15 reps", type: "Strength" },
  { name: "Bird-Dog", duration: "3 sets of 10 reps per side", type: "Mobility" }
];

document.getElementById("generateWorkout").addEventListener("click", () => {
    const random = workouts[Math.floor(Math.random() * workouts.length)];

    document.getElementById("workoutDisplay").innerHTML = `
    <h3>${random.name}</h3>
    <p>Type: ${random.type}</p>
    <p>Duration: ${random.duration}</p>`;
});