import "./Friend.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export function IndividualExpenses() {
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
    <article className="F_DetailsCntr">
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
        <p>{indExp.expenseType}</p>
      </div>

      <div className="IE_Amount_Paid">
        <p>You paid</p>
        <p>₹100.00</p>
      </div>

      <div className="IE_Amount_Lent">
        <div>
          <p>You paid</p>
          <p>₹100.00</p>
        </div>
        <div>
          <IconButton aria-label="delete" disabled color="primary">
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </article>
  );
}
