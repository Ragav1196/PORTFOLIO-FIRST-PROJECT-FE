import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import jsonwebtoken from "jsonwebtoken";
import { API_URL } from "../../Global Constants/GlobalConstants";

export function FriendsNames() {
  const [friends, setFriends] = useState([]);

  // DECODING THE TOKEN
  const token = localStorage.getItem("Token");
  var decodedObj = jsonwebtoken.decode(token);

  /*   useEffect(async () => {
    const response = await fetch(`${API_URL}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(decodedObj.id),
    });
    const data = await response.json();

    if (data.Access) {
      localStorage.setItem("Token", data.token);
      return;
    }
  }, []); */

  // GETTING FRIENDS FROM BACKEND
  useEffect(async () => {
    const response = await fetch(`${API_URL}/get-friends`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        friendsChannelId: decodedObj.id.friendsChannel,
        userId: decodedObj.id._id,
      }),
    });

    const data = await response.json();
    if (!data.Access) {
      return;
    }

    const friendsNames = data.friends.map((data) => data.name);
    setFriends(friendsNames);
  }, []);

  const history = useHistory();

  return (
    <>
      {friends[0] ? (
        friends.map((data, i) => {
          return (
            <div
              onClick={() => history.push(`/friend/${data.id}`)}
              key={i}
              className="LM_LogoEditCntr LM_cursor"
            >
              <IconButton aria-label="delete">
                <LocalOfferIcon />
              </IconButton>

              <li>{data}</li>
            </div>
          );
        })
      ) : (
        <p className="FN_Empty">You have not added any friends yet</p>
      )}
    </>
  );
}
