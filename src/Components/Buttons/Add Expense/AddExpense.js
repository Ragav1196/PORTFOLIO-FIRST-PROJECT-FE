import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import "./AddExpense.css";
import { context } from "../../Routes/Links";
import { ExpenseBody } from "../Expense Body/ExpenseBody";
import { useParams } from "react-router-dom";

export function AddExpense({ showAddExp, SetShowAddExp }) {
  const { id } = useParams();

  // GETTING FRND NAME FROM DATABASE THROUGH USECONTEXT
  const { frndsLst } = useContext(context);

  let frndName;
  if (frndsLst) {
    frndName = frndsLst.friends.filter(({ _id }) => _id === id);
  }

  return (
    <section className={`AE_MainCntr ${showAddExp ? "" : "AE_MainCntrDisp"}`}>
      {showAddExp ? (
        <article className="AE_AddExpCntr">
          <div className="AE_Heading">
            <p>Add An Expense</p>
            <IconButton
              onClick={() => SetShowAddExp(false)}
              aria-label="delete"
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="AE_Details">
            <div className="AE_SearchFriends">
              <p>Friend: {frndName[0].name}</p>
            </div>

            <ExpenseBody />
          </div>
        </article>
      ) : (
        ""
      )}
    </section>
  );
}
