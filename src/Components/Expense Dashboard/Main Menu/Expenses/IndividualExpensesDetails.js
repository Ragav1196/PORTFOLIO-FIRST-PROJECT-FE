import { useContext, useEffect } from "react";
import { context } from "../../../Routes/Links";

export function IndividualExpensesDetails({
  description,
  amount,
  persnToRtnAmt,
  totalAmount,
  i,
  show,
}) {
  const { expensesFrmDb } = useContext(context);
  const { FriendChannel } = expensesFrmDb;
  const { expenses } = FriendChannel;

  // TO CHANGE THE COLUMN AND COLOR BASED ON WHO IS LENDING OR OWING THE MONEY
  const reverseColumnsStyles = { flexDirection: "column-reverse" };  
  const changeColorStyles = { color: "red" };

  return (
    <section
      style={{ maxHeight: show.shldOpen && show.i === i ? "177px" : "0px" }}
      className="individualExpenseDetailsCntr"
    >
      <article>
        <img
          src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
          alt=""
        />
        <div>
          <p>{description}</p>
          <p>₹{totalAmount}</p>
          <p>Addedd by {amount[0].name} on February 22, 2022</p>
        </div>
      </article>

      <article
        style={
          persnToRtnAmt.name === amount[0].name ? reverseColumnsStyles : {}
        }
      >
        <div>
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
            alt="User"
            className="userImg"
          />
          <p>
            You paid <span>₹{amount[0].paid}</span> and{" "}
            {persnToRtnAmt.name === amount[0].name ? "owe" : "lent"}{" "}
            {amount[1].name}{" "}
            <span
              style={
                persnToRtnAmt.name === amount[0].name ? changeColorStyles : {}
              }
              className="IED_Lent_or_Owe"
            >
              ₹{persnToRtnAmt.amount}
            </span>
          </p>
        </div>

        <div>
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
            alt="User"
            className="userImg"
          />
          <p>
            {amount[1].name} paid <span>₹{amount[1].paid}</span> and{" "}
            {persnToRtnAmt.name === amount[1].name ? "owes" : "lent"} You{" "}
            <span
              style={
                persnToRtnAmt.name === amount[1].name ? changeColorStyles : {}
              }
              className="IED_Lent_or_Owe"
            >
              ₹{persnToRtnAmt.amount}
            </span>
          </p>
        </div>
      </article>
    </section>
  );
}
