
const API_URL =
"https://wger.de/api/v2/exercise/?limit=12&language=2";

//fetch exercises from the wger api//
export async function fetchExercises() {
    try {
        const response = await fetch (API_URL);
        const data = await response.json();

        //Filter out exercises with a name and category
        const filtered = data.results.filter(ex => ex.name && ex.category);
        return filtered;
         } catch (error) {
            console.error("Error fetching data:", error);
            return[];
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