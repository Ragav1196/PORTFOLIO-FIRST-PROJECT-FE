import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { context } from "../../Routes/Links";

export function FriendsNames() {
  // GETTING FRND NAME FROM DATABASE THROUGH USECONTEXT
  const { frndsLst } = useContext(context);
  const history = useHistory();

  return (
    <>
      {frndsLst ? (
        frndsLst.friends.map(({ name, _id }, i) => {
          return (
            <div
              onClick={() => history.push(`/friends/${_id}`)}
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
