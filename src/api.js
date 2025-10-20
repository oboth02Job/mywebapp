

export async function fetchExercises() {
  try {
    const response = await fetch("https://wger.de/api/v2/exercise/?language=2&limit=12");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
}


const BASE_URL = "https://wger.de/api/v2";

export async function fetchExercises() {
  const res = await fetch(`${BASE_URL}/exercise/?language=2&limit=50`);
  const data = await res.json();
  return data.results;
}

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/exercisecategory/`);
  const data = await res.json();
  return data.results;
}