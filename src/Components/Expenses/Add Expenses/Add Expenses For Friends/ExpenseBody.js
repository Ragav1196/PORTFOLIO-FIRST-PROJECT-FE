import "./ExpenseBody.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { decodeToken } from "react-jwt";
import { useContext, useEffect } from "react";
import { LinksContext } from "../../../Routes/Links";
import { AddExpenseToDb } from "../../../AddDataToDatabase";

export function ExpenseBody({
  paidPersn,
  setMoveCntrs,
  moveCntrs,
  friendFrmFrndsLst,
  multiplePayment,
  totalAmt,
  setTotalAmt,
  setMultPayer,
  setPaidPersn,
  setMultiplePayment,
}) {
  const { SetShowAddExp } = useContext(LinksContext);

  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // CALLING FUNCTION FROM "AddDataToDatabase" COMPONENT TO ADD THE EXPENSES TO THE DATABASE
  const link = "add-friends-expenses";
  function callingAddToDbFn(expenseDetails) {
    const response = AddExpenseToDb(expenseDetails, link);
    response.then(() => SetShowAddExp(false));
  }

  // FORM VALIDATION
  const formValidationSchema = yup.object({
    description: yup.string().required("Please provide a description"),
    amount: yup
      .number()
      .required("Please provide a amount")
      .positive("Please provide amount greater than zero")
      .min(1, "Please provide amount greater than zero"),
  });

  // FORMIK
  const {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      description: "",
      amount: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (expenseDetails, { resetForm }) => {
      let result = {};
      result.expenses = {
        description: expenseDetails.description,
        totalAmount: expenseDetails.amount,
      };

      // SETTING WHO NEED TO GIVE BACK THE MONEY
      result.persnToRtnAmt = multiplePayment.persnToRtnAmt
        ? multiplePayment.persnToRtnAmt
        : {
            name: paidPersn === "You" ? friendFrmFrndsLst : decodedObj.id.name,
            amount: totalAmt / 2,
          };

      result.username = multiplePayment.username
        ? multiplePayment.username
        : {
            name: decodedObj.id.name,
            paid: paidPersn === "You" ? expenseDetails.amount : 0,
          };

      result.friendName = multiplePayment.friendName
        ? multiplePayment.friendName
        : {
            name: friendFrmFrndsLst,
            paid: paidPersn === friendFrmFrndsLst ? expenseDetails.amount : 0,
          };
      setPaidPersn("You");
      setTotalAmt(0);
      setMultiplePayment({});
      resetForm();
      callingAddToDbFn(result);
    },
  });

  // TO ADD THE AMOUNT PAID BY BOTH THE USERS DYNAMICALLY IN THE FORM "AMOUNT" SECTION
  useEffect(() => {
    if (multiplePayment.isMultipleUsersPaid) {
      return setFieldValue("amount", totalAmt);
    }
  }, [totalAmt, multiplePayment.isMultipleUsersPaid, setFieldValue]);

  // TO RESET THE FORM WHENEVER THE PAID PERSON IS CHANGED
  useEffect(() => resetForm(), [paidPersn, resetForm]);

  return (
    <form onSubmit={handleSubmit} className="EB_FormCntr" action="">
      <section className="EB_MainCntr">
        <article className="EB_PaidBY">
          <div>
            <p>Who is paying ?</p>
            <p
              onClick={() => {
                setMoveCntrs(!moveCntrs);
                setMultPayer(false);
              }}
            >
              {paidPersn}
            </p>
          </div>
        </article>

        <article className="EB_Description">
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png"
            alt="Category"
          />
          <div>
            <input
              type="text"
              placeholder="Enter A Description"
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
              value={values.description}
              id="description"
            />
            <label htmlFor="amount">
              ???
              <input
                type="number"
                id="amount"
                placeholder="0.00"
                onChange={(e) => {
                  if (multiplePayment.isMultipleUsersPaid) {
                    return;
                  }
                  handleChange(e);
                  setTotalAmt(e.target.value);
                }}
                onBlur={handleBlur}
                name="amount"
                value={values.amount}
              />
            </label>
          </div>
        </article>

        <article className="EB_splitedAmt">
          <p>(???{totalAmt / 2}/person)</p>
        </article>

        <article className="EB_SaveBtn">
          <button
            onClick={() => {
              setMultPayer(false);
              setMoveCntrs(false);
              SetShowAddExp(false);
              setTotalAmt(0);
              setPaidPersn("You");
            }}
            className="btnDefltStyle"
            type="button"
          >
            Cancel
          </button>
          <button className="btnDefltStyle" type="submit">
            Save
          </button>
        </article>
      </section>
    </form>
  );
}
