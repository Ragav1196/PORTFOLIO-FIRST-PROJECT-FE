import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import IconButton from "@mui/material/IconButton";
import jsonwebtoken from "jsonwebtoken";
import { useEffect, useState } from "react";
import { API_URL } from "../../Global Constants/GlobalConstants";

export function GroupNames() {
  const [groups, setGroups] = useState([]);

  // DECODING THE TOKEN
  const token = localStorage.getItem("Token");
  var decodedObj = jsonwebtoken.decode(token);

  // GETTING GROUPS FROM BACKEND
  useEffect(async () => {
    const response = await fetch(`${API_URL}/get-groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        GroupsId: decodedObj.id.groups,
        // userId: decodedObj.id._id,
      }),
    });

    const data = await response.json();
    if (!data.Access) {
      return;
    }

    const GroupsName = data.GroupName.map((data) => data);
    setGroups(GroupsName);
  }, []);

  return (
    <>
      {groups[0] ? (
        groups.map((data, i) => {
          return (
            <div key={i} className="LM_LogoEditCntr LM_cursor">
              <IconButton aria-label="delete">
                <LocalOfferIcon />
              </IconButton>

              <li>{data}</li>
            </div>
          );
        })
      ) : (
        <p className="GN_Empty">You do not have any groups yet</p>
      )}
    </>
  );
}
