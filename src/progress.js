const form = document.getElementById("progressForm");
const list = document.getElementById("progressList");

form.addEventListener("submit", (e) => {e.preventDefault();
    const workout = document.getElementById("workoutName").value;

    const item = document.createElement("li");
    item.textContent = `${workout} - ${duration} mins`;
    list.appendChild(item);

    form.reset();
})