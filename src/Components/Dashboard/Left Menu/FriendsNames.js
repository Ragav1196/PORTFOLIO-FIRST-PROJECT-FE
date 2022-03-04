import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { decodeToken } from "react-jwt";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../Global Constants/GlobalConstants";
import { LinksContext } from "../../Routes/Links";

export function FriendsNames() {
  // GETTING FRND NAME FROM DATABASE THROUGH USECONTEXT
  const { frndsLst } = useContext(LinksContext);
  const history = useHistory();

  // GETTING USER ID FROM THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);
  const user_id = decodedObj.id._id;

  return (
    <>
      {frndsLst.friends ? (
        frndsLst.friends.map(({ name, _id }, i) => {
          return (
            <div
              onClick={() => {
                history.push(`/friends/${user_id}/${_id}`);
              }}
              key={i}
              className="LM_LogoEditCntr LM_cursor"
            >
              <IconButton aria-label="delete">
                <LocalOfferIcon />
              </IconButton>

              <li>{name}</li>
            </div>
          );
        })
      ) : (
        <p className="FN_Empty">You have not added any friends yet</p>
      )}
    </>
  );
}
