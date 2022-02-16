import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { context } from "../../Routes/Links";

export function GroupNames() {
  // GETTING GROUPS NAME FROM DATABASE THROUGH USECONTEXT
  const { grpsLst } = useContext(context);

  return (
    <>
      {grpsLst[0] ? (
        grpsLst.map((data, i) => {
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
