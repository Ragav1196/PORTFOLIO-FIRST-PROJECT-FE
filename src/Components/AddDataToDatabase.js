import { API_URL } from "./Global Constants/GlobalConstants";
import jsonwebtoken from "jsonwebtoken";

// DECODING THE TOKEN
const token = localStorage.getItem("Token");
var decodedObj = jsonwebtoken.decode(token);

export function AddExpenseToDb(FriendName) {
  fetch(`${API_URL}/add-friends-expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: decodedObj.id.name,
      friendName: FriendName,
      expenses: { category: "meals", amount: 10000 },
    }),
  });
}
