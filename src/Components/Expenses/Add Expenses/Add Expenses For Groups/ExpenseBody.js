import "./ExpenseBody.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { LinksContext } from "../../../Routes/Links";
import { decodeToken } from "react-jwt";
import { AddExpenseToDb } from "../../../AddDataToDatabase";
import { useParams } from "react-router-dom";

export function ExpenseBody({
  setMoveCntrs,
  membersArr,
  totalAmt,
  moveCntrs,
  setMultPayer,
  paidPersn,
  setPaidPersn,
  setTotalAmt,
  multiplePayment,
}) {
  const { SetShowAddExp } = useContext(LinksContext);

  const { id } = useParams();

  const grpMembersLength = membersArr.length;

  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // CALLING FUNCTION FROM "AddDataToDatabase" COMPONENT TO ADD THE EXPENSES TO THE DATABASE
  const link = `add-groups-expenses/${id}`;
  function callingAddToDbFn(expenseDetails) {
    const response = AddExpenseToDb(expenseDetails, link);
    response.then(() => SetShowAddExp(false));
  }

  // VALIDATIONS
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
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      description: "",
      amount: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: ({ description, amount }) => {
      let result = {};

      // EXPENSE DETAILS
      result.expenses = {
        description: description,
        totalAmount: amount,
      };

      // DETAILS OF PERSONS TO RETURN THE AMOUNT
      result.persnToRtnAmt = [];
      if (multiplePayment.persnToRtnAmt) {
        result.persnToRtnAmt = multiplePayment.persnToRtnAmt;
      } else {
        if (paidPersn === "You") {
          membersArr.forEach((data) => {
            if (data !== decodedObj.id.name) {
              result.persnToRtnAmt.push({
                name: data,
                payTo: decodedObj.id.name,
                AmountToPay: totalAmt / grpMembersLength,
              });
            }
          });
        } else {
          membersArr.forEach((data) => {
            if (data !== paidPersn) {
              result.persnToRtnAmt.push({
                name: data,
                payTo: paidPersn,
                AmountToPay: totalAmt / grpMembersLength,
              });
            }
          });
        }
      }

      // USER DETAILS
      result.username = multiplePayment.username
        ? multiplePayment.username
        : {
            name: decodedObj.id.name,
            paid: paidPersn === "You" ? amount : 0,
          };

      // FRIENDS DETAILS
      if (multiplePayment.friendsName) {
        result.friendsName = multiplePayment.friendsName;
      } else {
        result.friendsName = [];
        membersArr.forEach((data) => {
          if (data !== decodedObj.id.name) {
            result.friendsName.push({
              name: data,
              paid: paidPersn === data ? amount : 0,
            });
          }
        });
      }

      callingAddToDbFn(result);
    },
  });

  // TO ADD THE AMOUNT PAID BY BOTH THE USERS DYNAMICALLY IN THE FORM "AMOUNT" SECTION
  useEffect(() => {
    if (multiplePayment.isMultipleUsersPaid) {
      return setFieldValue("amount", totalAmt);
    }
  }, [totalAmt]);

  // TO RESET THE FORM WHENEVER THE PAID PERSON IS CHANGED
  useEffect(() => resetForm(), [paidPersn]);

  return (
    <form onSubmit={handleSubmit} className="EB_FormCntr">
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
              {paidPersn === decodedObj.id.name ? "You" : paidPersn}
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
              name="description"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <label htmlFor="amount">
              ₹
              <input
                type="number"
                id="amount"
                placeholder="0.00"
                name="amount"
                onChange={(e) => {
                  if (multiplePayment.isMultipleUsersPaid) {
                    return;
                  }
                  handleChange(e);
                  setTotalAmt(e.target.value);
                }}
                onBlur={handleBlur}
                value={values.amount}
              />
            </label>
          </div>
        </article>

        <article className="EB_splitedAmt">
          {multiplePayment.isMultipleUsersPaid ? (
            <p>(₹{totalAmt / grpMembersLength}/person)</p>
          ) : (
            <p>₹{totalAmt / grpMembersLength}/person</p>
          )}
        </article>

        <article className="EB_SaveBtn">
          <button
            onClick={() => {
              setMultPayer(false);
              setMoveCntrs(false);
              SetShowAddExp(false);
            }}
            className="btnDfltStyle"
            type="button"
          >
            Cancel
          </button>
          <button className="btnDfltStyle" type="submit">
            Save
          </button>
        </article>
      </section>
    </form>
  );
}
