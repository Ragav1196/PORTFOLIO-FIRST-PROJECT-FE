import { decodeToken } from "react-jwt";

export function IndividualExpensesDetails({
  description,
  totalAmount,
  amount,
  persnToRtnAmt,
  i,
  show,
}) {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  return (
    <section
      style={{ maxHeight: show.shldOpen && show.i === i ? "261px" : "0px" }}
      className="individualExpenseDetailsCntr group_IED_Cntr"
    >
      <article>
        <img
          src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
          alt=""
        />
        <div>
          <p>{description}</p>
          <p>₹{totalAmount}</p>
          <p>Added by You on February 22, 2022</p>
        </div>
      </article>

      <article>
        <p>AMOUNT PAID BY EACH MEMBER</p>
        {amount.map(({ paid, name }, i) => (
          <div key={i}>
            <img
              src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
              alt="User"
              className="userImg"
            />
            <p>
              {decodedObj.id.name === name ? "You" : name} paid{" "}
              <span>₹{paid}</span>
            </p>
          </div>
        ))}
      </article>

      <article>
        <p>MEMBERS NEED TO SETTLE UP</p>
        {persnToRtnAmt.map(({ name, payTo, AmountToPay }, i) => (
          <div key={i}>
            <img
              src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
              alt="User"
              className="userImg"
            />
            <p>
              {name === decodedObj.id.name ? "You" : name} owes{" "}
              {payTo === decodedObj.id.name ? "You" : payTo}{" "}
              <span>₹{AmountToPay}</span>
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
