import { decodeToken } from "react-jwt";

export function IndividualExpensesDetails({
  description,
  amount,
  persnToRtnAmt,
  totalAmount,
  i,
  show,
}) {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  return (
    <section
      style={{ maxHeight: show.shldOpen && show.i === i ? "251px" : "0px" }}
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
          <p>Addedd by {decodedObj.id.name} on February 22, 2022</p>
        </div>
      </article>

      <article>
        <p>AMOUNT PAID BY EACH MEMBER</p>
        {amount.map((data, i) => (
          <div key={i}>
            <img
              src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
              alt="User"
              className="userImg"
            />

            <p>
              {data.name} paid ₹{data.paid}
            </p>
          </div>
        ))}

        <p>MEMBER NEED TO SETTLE UP</p>
        <div>
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
            alt="User"
            className="userImg"
          />

          {amount.map((data, i) => {
            if (data.name !== persnToRtnAmt.name) {
              return (
                <p key={i}>
                  {persnToRtnAmt.name === decodedObj.id.name
                    ? "You"
                    : persnToRtnAmt.name}{" "}
                  owes {data.name === decodedObj.id.name ? "You" : data.name} ₹
                  {persnToRtnAmt.amount}
                </p>
              );
            }
            return 0;
          })}
        </div>
      </article>
    </section>
  );
}
