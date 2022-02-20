import "./ExpenseBody.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { decodeToken } from "react-jwt";

export function ExpenseBody({
  paidPersn,
  setMoveCntrs,
  moveCntrs,
  friendFrmFrndsLst,
  multiplePayment,
  amtPerPerson,
  setAmtPerPerson,
}) {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // FORM VALIDATION
  const formValidationSchema = yup.object({
    description: yup.string().required("Please provide a description"),
    amount: yup.number().required("Please provide a amount"),
  });

  // FORMIK
  const { handleChange, values, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      description: "",
      amount: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (details) => {
      const expenses = {
        description: details.description,
        totalAmount: details.amount,
      };

      const persnToRtnAmt = multiplePayment.persnToRtnAmt || {
        name: paidPersn === "You" ? friendFrmFrndsLst : decodedObj.id.name,
        amount: paidPersn !== "Multiple People" ? amtPerPerson / 2 : "",
      };
      let result = {};

      result.username = multiplePayment.username || {
        name: decodedObj.id.name,
        paid: paidPersn === "You" ? details.amount : 0,
      };
      result.friendName = multiplePayment.friendName || {
        name: friendFrmFrndsLst,
        paid: paidPersn === friendFrmFrndsLst ? details.amount : 0,
      };

      result.expenses = expenses;
      result.persnToRtnAmt = persnToRtnAmt;
    },
  });

  return (
    <form onSubmit={handleSubmit} className="EB_FormCntr" action="">
      <section className="EB_MainCntr">
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
              ₹
              <input
                type="number"
                id="amount"
                placeholder="0.00"
                onChange={(e) => {
                  handleChange(e);
                  setAmtPerPerson(e.target.value);
                }}
                onBlur={handleBlur}
                name="amount"
                value={values.amount}
              />
            </label>
          </div>
        </article>

        <article className="EB_Share">
          <p>
            Paid by
            <span onClick={() => setMoveCntrs(!moveCntrs)}>{paidPersn}</span>
          </p>
          <p>(₹{amtPerPerson / 2}/person)</p>
        </article>

        <article className="EB_SaveBtn">
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </article>
      </section>
    </form>
  );
}
