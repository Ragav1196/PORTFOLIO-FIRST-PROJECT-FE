import { API_URL } from "./Global Constants/GlobalConstants";

// FUNCTION FOR ADDING DETAILS TO DATABASE
export function AddExpenseToDb(data, link) {
  const addExpenseToDb = fetch(`${API_URL}/${link}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return addExpenseToDb;
}
