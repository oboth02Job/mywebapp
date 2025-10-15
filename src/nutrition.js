const APP_ID = "YOUR_APP_ID";  // Replace with your own
const API_KEY = "YOUR_API_KEY"; // Replace with your own
const BASE_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients";

export async function fetchNutrition(food) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": APP_ID,
        "x-app-key": API_KEY,
      },
      body: JSON.stringify({ query: food }),
    });

    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data.foods;
  } catch (error) {
    console.error(error);
    return [];
  }
}