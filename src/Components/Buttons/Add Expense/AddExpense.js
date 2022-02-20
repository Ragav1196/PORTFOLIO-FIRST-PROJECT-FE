import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import "./AddExpense.css";
import { context } from "../../Routes/Links";
import { ExpenseBody } from "../Expense Body/ExpenseBody";
import { useParams } from "react-router-dom";
import { ChoosePayer } from "../Expense Body/ChoosePayer";

export function AddExpense({ showAddExp, SetShowAddExp }) {
  // GETTING FRIEND ID fROM THE URL
  const { id } = useParams();

  // TO SHOW/HIDE THE "ChoosePayer" COMPONENT
  const [moveCntrs, setMoveCntrs] = useState(false);
  const styles = {
    transform: moveCntrs ? "translate(0px, 0px)" : "translate(200px, 0px)",
  };

  // GETTING FRND NAME FROM DATABASE THROUGH USECONTEXT
  const { frndsLst } = useContext(context);

  // TO FILTER THE FRIENDS NAME ALONE FROM THE "frndsLst" BASED ON ID
  let friendFrmFrndsLst;
  if (frndsLst) {
    const frndDetailObj = frndsLst.friends.filter(({ _id }) => _id === id);
    friendFrmFrndsLst = frndDetailObj[0].name;
  }

  // TO SET WHO IS PAYING THE CURRENT EXPENSE
  const [paidPersn, setPaidPersn] = useState("You");

  // TO SET PAYMENT DETAILS WHERE MULTIPLE USERS SHARE THE AMOUNT
  const [multiplePayment, setMultiplePayment] = useState({});

  // TO DIVIDE THE TOTAL AMOUNT BETWEEN THE USERS
  const [amtPerPerson, setAmtPerPerson] = useState();

  // TO SET THE TOTAL AMOUNT SPENT FOR THE CURRENT EXPENSE
  const [totalAmt, setTotalAmt] = useState();

  return (
    <section className={`AE_MainCntr ${showAddExp ? "" : "AE_MainCntrDisp"}`}>
      {showAddExp ? (
        <article style={styles} className="AE_AddExpCntr">
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
              <p>Friend: {friendFrmFrndsLst}</p>
            </div>

            <ExpenseBody
              moveCntrs={moveCntrs}
              setMoveCntrs={setMoveCntrs}
              friendFrmFrndsLst={friendFrmFrndsLst}
              paidPersn={paidPersn}
              setPaidPersn={setPaidPersn}
              multiplePayment={multiplePayment}
              amtPerPerson={amtPerPerson}
              setAmtPerPerson={setAmtPerPerson}
              totalAmt={totalAmt}
              setTotalAmt={setTotalAmt}
            />
          </div>
        </article>
      ) : (
        ""
      )}
      
      {/* CONTAIINER WHERE TO SELECT WHO IS PAYING */}
      <ChoosePayer
        moveCntrs={moveCntrs}
        setMoveCntrs={setMoveCntrs}
        friendFrmFrndsLst={friendFrmFrndsLst}
        setPaidPersn={setPaidPersn}
        setAmtPerPerson={setAmtPerPerson}
        multiplePayment={multiplePayment}
        setMultiplePayment={setMultiplePayment}
        amtPerPerson={amtPerPerson}
        setTotalAmt={setTotalAmt}
        totalAmt={totalAmt}
      />
    </section>
  );
}
