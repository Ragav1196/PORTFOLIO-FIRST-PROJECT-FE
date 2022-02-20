import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./ExpenseBody.css";
import { decodeToken } from "react-jwt";

export function ChoosePayer({
  setPaidPersn,
  moveCntrs,
  setMoveCntrs,
  friendFrmFrndsLst,
  setMultiplePayment,
  amtPerPerson,
}) {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // TO SHOW/HIDE THE "ChoosePayer" COMPONENT
  const styles = {
    transform: moveCntrs ? "translate(0px, 0px)" : "translate(-200px, 20px)",
  };

  // TO SHOW OR HIDE THE MULTIPLE PLAYER FORM WHERE USERS CAN SPLIT AND RECORD THE TOTAL AMOUNT BETWEEN THEM
  const [multPayer, setMultPayer] = useState(false);

  // FORM VALIDATION
  const formValidationSchema = yup.object({
    user: yup.number().required("Please provide the amount"),
    friend: yup.number().required("Please provide the amount"),
  });

  // FORMIK
  const { handleChange, values, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      user: "",
      friend: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (details) => {
      const username = { name: decodedObj.id.name, paid: details.user };
      const friendName = { name: friendFrmFrndsLst, paid: details.friend };
      const amount =
        details.user > details.friend
          ? details.user - amtPerPerson / 2
          : details.friend - amtPerPerson / 2;
      const name =
        details.user < details.friend ? decodedObj.id.name : friendFrmFrndsLst;
      const persnToRtnAmt = { name: name, amount: amount };
      setMultiplePayment({ username, friendName, persnToRtnAmt });
      setPaidPersn("Multiple People");
      setMoveCntrs(false);
    },
  });
  return (
    <section style={styles} className="CP_MainCntr">
      <article className="CP_Heading">
        <p>Choose Payer</p>
      </article>

      <article className="CP_UsersCntr">
        <div
          onClick={() => {
            setPaidPersn("You");
            setMoveCntrs(false);
            setMultPayer(false);
          }}
        >
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue8-50px.png"
            alt=""
          />
          <p>{decodedObj.id.name}</p>
        </div>
        <div
          onClick={() => {
            setPaidPersn(friendFrmFrndsLst);
            setMoveCntrs(false);
            setMultPayer(false);
          }}
        >
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue8-50px.png"
            alt=""
          />
          <p>{friendFrmFrndsLst}</p>
        </div>
      </article>

      {/* MULTIPLE PAYMENT CONTAINER */}
      <article className="CP_PaidByMultPpl">
        <p onClick={() => setMultPayer(true)}>Multiple People</p>
        {multPayer ? (
          <form onSubmit={handleSubmit} action="">
            <div>
              <div>
                <p>{decodedObj.id.name}</p>
                <input
                  type="number"
                  name="user"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user}
                  placeholder="Enter the amount"
                />
              </div>
              <div>
                <p>{friendFrmFrndsLst}</p>
                <input
                  type="number"
                  name="friend"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.friend}
                  placeholder="Enter the amount"
                />
              </div>
            </div>
            <button type="submit">ADD</button>
          </form>
        ) : (
          ""
        )}
      </article>
    </section>
  );
}
