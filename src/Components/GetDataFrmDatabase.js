import { API_URL } from "./Global Constants/GlobalConstants";

// GETTING FRIENDS LIST FROM DATABASE
export function FriendsListFn(decodedObj) {
  const FriendsList = fetch(`${API_URL}/get-friends`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("Token"),
    },
    body: JSON.stringify({
      friendsChannelId: decodedObj.id.friendsChannel,
      userId: decodedObj.id._id,
    }),
  }).then((data) => data.json());

  return FriendsList;
}

// GETTING GROUPS LIST FROM DATABASE
export function GroupsListFn(decodedObj) {
  const GroupsList = fetch(`${API_URL}/get-groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("Token"),
    },
    body: JSON.stringify({
      GroupsId: decodedObj.id.groups,
    }),
  }).then((data) => data.json());

  return GroupsList;
}
