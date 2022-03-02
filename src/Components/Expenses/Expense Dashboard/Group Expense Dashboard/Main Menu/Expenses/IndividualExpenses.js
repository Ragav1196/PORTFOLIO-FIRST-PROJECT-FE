import "./Groups.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { IndividualExpensesDetails } from "./IndividualExpensesDetails";
import { decodeToken } from "react-jwt";

export function IndividualExpenses({ groupDetails }) {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  const expenses = groupDetails.expenses; //SEPERATING ONLY THE EXPENSE DETAILS

  return (
    <>
      {expenses
        ? expenses.map(
            ({ description, totalAmount, amount, persnToRtnAmt }, i) => {
              let amtOwe = 0;
              let amtLent = 0;
              return (
                <article key={i} className="F_DetailsCntr">
                  <article>
                    <div className="F_Date">
                      <p>Jan</p>
                      <p>1</p>
                    </div>
                    <div className="F_IndExpType">
                      <img
                        src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
                        alt=""
                      />
                      <p>{description}</p>
                    </div>

                    <div className="IE_TotalAmount">
                      <p>Total Amount</p>
                      <p>₹{totalAmount}</p>
                    </div>

                    <div className="IE_Amount_Paid">
                      <p>You Paid</p>
                      <p>
                        ₹
                        {amount.map(({ name, paid }) =>
                          decodedObj.id.name === name ? paid : ""
                        )}
                      </p>
                    </div>

                    <div className="IE_Amount_Paid">
                      <p>You Lent</p>
                      <p>
                        ₹
                        {persnToRtnAmt.map(({ name, AmountToPay, payTo }) => {
                          if (decodedObj.id.name === payTo) {
                            amtLent += AmountToPay;
                          }
                        })}
                        {amtLent}
                      </p>
                    </div>

                    <div className="IE_Amount_Lent">
                      <div>
                        <p>You Owe</p>
                        <p>
                          ₹
                          {persnToRtnAmt.map(({ name, AmountToPay }) => {
                            if (decodedObj.id.name === name) {
                              amtOwe += AmountToPay;
                            }
                          })}
                          {amtOwe}
                        </p>
                      </div>
                      <div>
                        <IconButton
                          aria-label="delete"
                          disabled
                          color="primary"
                        >
                          <CloseIcon />
                        </IconButton>
                      </div>
                    </div>
                  </article>

                  <div className="IndividualExpensesDetailsCall">
                    <IndividualExpensesDetails
                      description={description}
                      totalAmount={totalAmount}
                      amount={amount}
                      persnToRtnAmt={persnToRtnAmt}
                    />
                  </div>
                </article>
              );
            }
          )
        : ""}
    </>
  );
}
