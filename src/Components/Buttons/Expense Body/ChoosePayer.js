import { useContext, useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import "./ExpenseBody.css";
import { decodeToken } from "react-jwt";

export function ChoosePayer({
  setPaidPersn,
  moveCntrs,
  setMoveCntrs,
  friendFrmFrndsLst,
  setMultiplePayment,
  multPayer,
  setMultPayer,
  setTotalAmt,
}) {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // TO SHOW/HIDE THE "ChoosePayer" COMPONENT
  const styles = {
    transform: moveCntrs ? "translate(0px, 0px)" : "translate(-200px, 20px)",
  };

  /* 
  TO SHOW AN ERROR IF THE AMOUNT ENTERED MANUALLY FOR EACH USER IS NOT EQUAL TO 
    THE TOTAL AMOUNT 
  */
  const [AmtExceeding, setAmtExceeding] = useState("");

  // FORM VALIDATION
  const formValidationSchema = yup.object({
    user: yup
      .number()
      .required("Please provide the amount")
      .positive("Please provide amount greater than 0")
      .min(1, "Please provide amount greater than 0"),
    friend: yup
      .number()
      .required("Please provide the amount")
      .positive("Please provide amount greater than 0")
      .min(1, "Please provide amount greater than 0"),
  });

  // FORMIK
  const { handleChange, values, handleSubmit, handleBlur, errors } = useFormik({
    initialValues: {
      user: "",
      friend: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (details, { resetForm }) => {
      // ADDING THE AMOUNT ENTERED FOR PAYMENT MADE BY BOTH THE USERS
      const totalAmtSum = details.user + details.friend;
      const username = { name: decodedObj.id.name, paid: details.user };
      const friendName = { name: friendFrmFrndsLst, paid: details.friend };
      const amount =
        details.user > details.friend
          ? details.user - totalAmtSum / 2
          : details.friend - totalAmtSum / 2;
      const name =
        details.user < details.friend ? decodedObj.id.name : friendFrmFrndsLst;
      const persnToRtnAmt = { name: name, amount: amount };
      setMultiplePayment({
        username,
        friendName,
        persnToRtnAmt,
        isMultipleUsersPaid: true,
      });
      setPaidPersn("Multiple People");
      setMoveCntrs(false);
      setMultPayer(false);
      setTotalAmt(totalAmtSum);
      resetForm();
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
            setTotalAmt(0);
            setMultiplePayment({});
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
            setTotalAmt(0);
            setMultiplePayment({});
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
            <button id="btnDfltStyle" type="submit">
              ADD
            </button>

            {AmtExceeding === "grt" ? (
              <p>AMOUNT IS EXCEEDING THE TOTAL AMOUNT </p>
            ) : (
              ""
            )}

            {AmtExceeding === "ls" ? (
              <p>AMOUNT IS FALLING SHORT OF THE TOTAL AMOUNT </p>
            ) : (
              ""
            )}
          </form>
        ) : (
          ""
        )}
      </article>
    </section>
  );
}
