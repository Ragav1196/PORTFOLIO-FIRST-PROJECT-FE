import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { context } from "../../Routes/Links";

export function GroupNames() {
  const history = useHistory();

  // GETTING GROUPS DETAILS FROM DATABASE THROUGH USECONTEXT
  const { grpsLst } = useContext(context);

  // SEPERATING ONLY THE GROUP NAME AND ID FORM THE "grpLst" OBJECT
  let groupsDetails = [];
  if (grpsLst) {
    groupsDetails = grpsLst.groupsDetails;
  }

  return (
    <>
      {groupsDetails[0] ? (
        groupsDetails.map((data, i) => {
          return (
            <div
              onClick={() => history.push(`/groups/${data._id}`)}
              key={i}
              className="LM_LogoEditCntr LM_cursor"
            >
              <IconButton aria-label="delete">
                <LocalOfferIcon />
              </IconButton>

              <li>{data.name}</li>
            </div>
          );
        })
      ) : (
        <p className="GN_Empty">You do not have any groups yet</p>
      )}
    </>
  );
}
