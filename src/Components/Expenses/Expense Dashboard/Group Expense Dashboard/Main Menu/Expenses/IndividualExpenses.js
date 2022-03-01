import "./Groups.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { IndividualExpensesDetails } from "./IndividualExpensesDetails";

export function IndividualExpenses() {
  return (
    <>
      <article className="F_DetailsCntr">
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
            <p>Description</p>
          </div>
          <div className="IE_TotalAmount">
            <p>Total Amount</p>
            <p>₹0</p>
          </div>
          <div className="IE_Amount_Paid">
            <p>You Paid</p>
            <p>₹0</p>
          </div>
          <div className="IE_Amount_Lent">
            <div>
              <p>You Owe</p>
              <p>₹0</p>
            </div>
            <div>
              <IconButton aria-label="delete" disabled color="primary">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </article>

        <div className="IndividualExpensesDetailsCall">
          <IndividualExpensesDetails />
        </div>
      </article>
    </>
  );
}
