import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import "./MainPage.css";
import { ExpenseBody } from "./ExpenseBody";
import { useParams } from "react-router-dom";
import { ChoosePayer } from "./ChoosePayer";
import { LinksContext } from "../../../Routes/Links";

export function MainPage() {
  // GETTING FRIEND ID fROM THE URL
  const { friend_id } = useParams();

  const { showAddExp, SetShowAddExp } = useContext(LinksContext);

  // TO SHOW/HIDE THE "ChoosePayer" COMPONENT
  const [moveCntrs, setMoveCntrs] = useState(false);
  const styles = {
    transform: moveCntrs ? "translate(0px, 0px)" : "translate(200px, 0px)",
  };

  // GETTING FRND NAME FROM DATABASE THROUGH USECONTEXT
  const { frndsLst } = useContext(LinksContext);

  // TO SET WHO IS PAYING THE CURRENT EXPENSE
  const [paidPersn, setPaidPersn] = useState("You");

  // TO SET PAYMENT DETAILS WHERE MULTIPLE USERS SHARE THE AMOUNT
  const [multiplePayment, setMultiplePayment] = useState({});

  // TO SET THE TOTAL AMOUNT SPENT FOR THE CURRENT EXPENSE
  const [totalAmt, setTotalAmt] = useState(0);

  // TO SHOW OR HIDE THE MULTIPLE PLAYER FORM WHERE USERS CAN SPLIT AND RECORD THE TOTAL AMOUNT BETWEEN THEM
  const [multPayer, setMultPayer] = useState(false);

  // TO FILTER THE FRIENDS NAME ALONE FROM THE "frndsLst" BASED ON ID
  let friendFrmFrndsLst;
  if (frndsLst.friends) {
    const frndDetailObj = frndsLst.friends.filter(
      ({ _id }) => _id === friend_id
    );
    friendFrmFrndsLst = frndDetailObj[0].name;
  }

  return (
    <section className={`AE_MainCntr ${showAddExp ? "" : "AE_MainCntrDisp"}`}>
      {showAddExp ? (
        <article style={styles} className="AE_AddExpCntr">
          <div className="AE_Heading">
            <p>Add An Expense</p>
            <IconButton
              onClick={() => {
                setMultPayer(false);
                setMoveCntrs(false);
                SetShowAddExp(false);
              }}
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
              paidPersn={paidPersn}
              setPaidPersn={setPaidPersn}
              multiplePayment={multiplePayment}
              setMultiplePayment={setMultiplePayment}
              totalAmt={totalAmt}
              setTotalAmt={setTotalAmt}
              setMultPayer={setMultPayer}
              moveCntrs={moveCntrs}
              setMoveCntrs={setMoveCntrs}
              friendFrmFrndsLst={friendFrmFrndsLst}
            />
          </div>
        </article>
      ) : (
        ""
      )}

      {/* CONTAIINER WHERE TO SELECT WHO IS PAYING */}
      <ChoosePayer
        setPaidPersn={setPaidPersn}
        setMultiplePayment={setMultiplePayment}
        setTotalAmt={setTotalAmt}
        multPayer={multPayer}
        setMultPayer={setMultPayer}
        moveCntrs={moveCntrs}
        setMoveCntrs={setMoveCntrs}
        friendFrmFrndsLst={friendFrmFrndsLst}
      />
    </section>
  );
}
