import "./Friend.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { context } from "../../../../../Routes/Links";
import { IndividualExpensesDetails } from "./IndividualExpensesDetails";

export function IndividualExpenses() {
  // TO OPEN/HIDE THE "IndividualExpensesDetails" COMPONENT
  const [show, setShow] = useState({ shldOpen: false, i: "" });

  const { expensesFrmDb, setExpensesFrmDb } = useContext(context);
  const { FriendChannel } = expensesFrmDb;
  const { expenses } = FriendChannel;

  const indExp = {
    id: 1,
    name: "Rajesh",
    image:
      "https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png",
    amount: "₹46.00",
    lentAmount: "92",
    expenseType: "bike",
    date: new Date(2021, 0, 1),
    isYouOwe: false,
    isYouAreOwed: true,
  };

  return (
    <>
      {expenses.map(
        ({ description, amount, persnToRtnAmt, totalAmount }, i) => (
          <article key={i} className="F_DetailsCntr">
            <article
              onClick={() =>
                setShow(
                  i === show.i
                    ? { shldOpen: !show.shldOpen, i: i }
                    : { shldOpen: true, i: i }
                )
              }
            >
              <div className="F_Date">
                <p>
                  {indExp.date
                    .toLocaleString("default", { month: "short" })
                    .toUpperCase()}
                </p>
                <p>{indExp.date.getDate()}</p>
              </div>
              <div className="F_IndExpType">
                <img src={indExp.image} alt="" />
                <p>{description}</p>
              </div>
              <div className="IE_TotalAmount">
                <p>Total Amount</p>
                <p>₹{totalAmount}</p>
              </div>
              <div className="IE_Amount_Paid">
                <p>You Paid</p>
                <p>₹{amount[0].paid}</p>
              </div>
              <div className="IE_Amount_Lent">
                <div>
                  <p>
                    {persnToRtnAmt.name === amount[0].name
                      ? "You Owe"
                      : "You Lent"}
                  </p>
                  <p
                    style={{
                      color:
                        persnToRtnAmt.name === amount[0].name ? "red" : "green",
                    }}
                  >
                    ₹{persnToRtnAmt.amount}
                  </p>
                </div>
                <div>
                  <IconButton aria-label="delete" disabled color="primary">
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            </article>

            <div className="IndividualExpensesDetailsCall">
              <IndividualExpensesDetails
                description={description}
                amount={amount}
                persnToRtnAmt={persnToRtnAmt}
                totalAmount={totalAmount}
                i={i}
                show={show}
              />
            </div>
          </article>
        )
      )}
    </>
  );
}
