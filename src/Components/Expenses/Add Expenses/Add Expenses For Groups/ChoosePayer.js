import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./ExpenseBody.css";
import { decodeToken } from "react-jwt";

export function ChoosePayer({
  membersArr,
  moveCntrs,
  setMoveCntrs,
  multPayer,
  setMultPayer,
  setTotalAmt,
  setPaidPersn,
  multiplePayment,
  setMultiplePayment,
}) {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // TO SHOW/HIDE THE "ChoosePayer" COMPONENT
  const styles = {
    transform: moveCntrs ? "translate(0px, 0px)" : "translate(-200px, 20px)",
  };

  // ADDING DETAILS FOR THE FORMIK INITIAL VALUES AND YUP VALLIDATIONS DYNAMICALY USING MAP FUNCTION FROM THE "membersArr"
  const [formikYup, setformikYup] = useState({});

  // WHENEVER "membersArr" CHANGE THIS FUNCTION WILL BE CALLED
  useEffect(() => {
    if (membersArr) {
      let yupObj = {}; //OBJECT VALUE FOR YUP VALLIDATION
      let formikObj = {}; //INTIAL VALUE FOR THE FORMIK INITIAL VALUES
      membersArr.map((data) => {
        yupObj[data] = yup
          .number()
          .required("Please provide a amount")
          .positive("Please provide amount greater than zero")
          .min(1, "Please provide amount greater than zero");
        formikObj[data] = "";
        return 0;
      });
      setformikYup({ yupValidation: yupObj, formikInitialValues: formikObj });
    }
  }, [membersArr]);

  // VALIDATION
  const formValidationSchema = yup.object({
    // IF THE THERE IS ANY VALUE INSIDE "formikYup" OBJECT THEN ONLY THE VALIDATION WILL BE ASSIGNED
    member: Object.keys(formikYup).length
      ? yup.object().shape(formikYup.yupValidation)
      : yup.object(),
  });

  // FORMIK
  const { handleChange, handleBlur, handleSubmit, values, initialValues } =
    useFormik({
      initialValues: {
        member: {},
      },
      validationSchema: formValidationSchema,
      onSubmit: ({ member }, { resetForm }) => {
        // TOTAL AMOUNT FOR THE CURRENT EXPENSE
        let totalAmtSum = 0;
        const objLength = Object.keys(member).length; //OBJECT LENGTH OF "member"

        const username = {
          name: decodedObj.id.name,
          paid: member[decodedObj.id.name],
        };

        const friendsName = [];

        // TO GET THE TOTAL AMOUNT SPENT FOR THE CURRENT EXPENSE
        for (const name in member) {
          totalAmtSum += member[name];
          if (name !== decodedObj.id.name) {
            friendsName.push({ name, paid: member[name] });
          }
        }

        // TO GET HOW MUCH EACH HAS TO REPAY TO THEIR FRIENDS
        let amountRepayment = [];
        for (const name in member) {
          amountRepayment.push({
            name: name,
            amount: member[name] - totalAmtSum / objLength,
          });
        }

        // TO SPLIT OWE PERSONS AND LENT PERSONS SEPERATELY
        let owePersons = [];
        let lentPersons = [];
        amountRepayment.map((data) => {
          // IF AMOUNT IS IN NEGATIVE THEN THEY ARE OWED PERSONS
          if (data.amount < 0) {
            owePersons.push({ name: data.name, amount: data.amount });
          }
          // IF AMOUNT IS IN POSITVE THEN THEY ARE LENT PERSONS
          else if (data.amount > 0) {
            lentPersons.push({ name: data.name, amount: data.amount });
          }
          return 0;
        });

        // SORTING OWE PERSONS FROM LESS AMOUNT TO HIGHEST AMOUNT
        owePersons.sort(function (a, b) {
          return a.amount - b.amount;
        });

        // SORTING LENT PERSONS FROM HIGH AMOUNT TO LESS AMOUNT
        lentPersons.sort(function (a, b) {
          return b.amount - a.amount;
        });

        //TO GET THE FINAL ESTIMATE WHO HAS TO RETURN MONEY TO WHOM
        let finalEstimate = [];
        let i = 0;
        while (i < owePersons.length) {
          const data = owePersons[i];
          let balance = data.amount + lentPersons[i].amount;

          // IF OWE PERSONS AMOUNT IS HIGHER THAN THE LENT PERSONS AMOUNT THEN THIS BLOCK WILL GET EXECUTED
          if (balance < 0) {
            owePersons[i].amount = balance; //ASSIGNING THE BALANCE AMOUNT

            // ADDING THE DETAIL OF HOW MUCH MONEY IS GIVEN BACK  IN THE "finalEstimate" VARIABLE
            finalEstimate.push({
              name: data.name,
              payTo: lentPersons[i].name,
              AmountToPay: lentPersons[i].amount,
            });

            lentPersons.shift(); // REMOVING THE LENT PERSON WHOSE BALANCE IS SETTLED
          }
          // IF BOTH OWED PERSONS AN DLENT PERSONS AMOUNT ARE SAME THEN THIS BLOCK WILL GET EXECUTED
          else if (balance === 0) {
            // ADDING THE DETAIL OF HOW MUCH MONEY IS GIVEN BACK  IN THE "finalEstimate" VARIABLE
            finalEstimate.push({
              name: data.name,
              payTo: lentPersons[i].name,
              AmountToPay: lentPersons[i].amount,
            });

            owePersons.shift(); // REMOVING THE OWED PERSON WHO HAS SETTLED HIS DEPT
            lentPersons.shift(); // REMOVING THE LENT PERSON WHOSE BALANCE IS SETTLED
          }
          // IF THE LENT PERSON AMOUNT IS HIGHER THAN THE OWEPERSONS AMOUNT THEN THIS BLOCK WILL GET EXECUTED
          else {
            owePersons.shift(); //REMOVING THE OWED PERSON WHO HAS SETTLED HIS DEPT
            lentPersons[i].amount = balance; //TO SUBRACT THE AMOUNT SETTLED BY THE OWE PERSON, WE ARE ASSIGNING THE BALANCE AMOUNT

            // ADDING THE DETAIL OF HOW MUCH MONEY IS GIVEN BACK  IN THE "finalEstimate" VARIABLE
            finalEstimate.push({
              name: data.name,
              payTo: lentPersons[i].name,
              AmountToPay: Math.abs(/* RETRUN POSITIVE NUMBER */ data.amount),
            });
          }
        }

        setMultiplePayment({
          username,
          friendsName,
          persnToRtnAmt: finalEstimate,
          isMultipleUsersPaid: true,
        });
        setPaidPersn("Multiple People");
        setTotalAmt(totalAmtSum);
        setMoveCntrs(false);
        resetForm();
        setMultPayer(false);
      },
    });

  // SETTING INITIAL VALUE FOR THE FORM FIELDS ONLY IF THERE IS ANY VALUE INSIDE THE "formikYup" OBJECT
  if (Object.keys(formikYup).length) {
    initialValues.member = formikYup.formikInitialValues;
  }

  return (
    <section style={styles} className="CP_MainCntr">
      <article className="CP_Heading">
        <p>Choose Payer</p>
      </article>

      <article className="CP_UsersCntr">
        {membersArr
          ? membersArr.map((data, i) => (
              <div
                key={i}
                onClick={() => {
                  setMoveCntrs(false);
                  setMultPayer(false);
                  setPaidPersn(data);
                  setTotalAmt(0);
                  setMultiplePayment({});
                }}
              >
                <img
                  src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue8-50px.png"
                  alt=""
                />
                <p>{data}</p>
              </div>
            ))
          : ""}
      </article>

      {/* MULTIPLE PAYMENT CONTAINER */}
      <article className="CP_PaidByMultPpl">
        <p onClick={() => setMultPayer(true)}>Multiple People</p>
        {multPayer ? (
          <form onSubmit={handleSubmit}>
            <div>
              {membersArr.map((data, i) => (
                <div key={i}>
                  <p>{data}</p>
                  <input
                    type="number"
                    name={`member.${data}`}
                    placeholder="Enter the amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.member[data]}
                  />
                </div>
              ))}
            </div>
            <button id="btnDfltStyle" type="submit">
              ADD
            </button>
          </form>
        ) : (
          ""
        )}
      </article>
    </section>
  );
}
