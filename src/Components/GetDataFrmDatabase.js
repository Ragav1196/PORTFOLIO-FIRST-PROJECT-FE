import jsonwebtoken from "jsonwebtoken";
import { API_URL } from "./Global Constants/GlobalConstants";

// DECODING THE TOKEN
const token = localStorage.getItem("Token");
var decodedObj = jsonwebtoken.decode(token);

// GETTING FRIENDS LIST FROM DATABASE
export const FriendsList = fetch(`${API_URL}/get-friends`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    friendsChannelId: decodedObj.id.friendsChannel,
    userId: decodedObj.id._id,
  }),
}).then((data) => data.json());

// GETTING GROUPS LIST FROM DATABASE
export const GroupsList = fetch(`${API_URL}/get-groups`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    GroupsId: decodedObj.id.groups,
  }),
}).then((data) => data.json());
