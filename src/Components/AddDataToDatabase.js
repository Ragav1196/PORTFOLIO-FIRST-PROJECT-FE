import { API_URL } from "./Global Constants/GlobalConstants";

// ADD FRIENDS EXPENSE TO DATABASE
export function AddExpenseToDb(FriendName, decodedObj) {
  fetch(`${API_URL}/add-friends-expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: { name: decodedObj.id.name, paid: 1 },
      friendName: FriendName,
      expenses: { category: "meals", amount: 10000 },
    }),
  });
}
