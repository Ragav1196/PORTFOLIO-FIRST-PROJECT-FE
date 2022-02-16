import "./ExpenseBody.css";

export function ExpenseBody() {
  return (
    <section className="EB_MainCntr">
      <article className="EB_Description">
        <img
          src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png"
          alt="Category"
        />
        <div>
          <input type="text" placeholder="Enter A Description" />
          <label htmlFor="amount">
            ₹<input type="number" id="amount" placeholder="0.00" />
          </label>
        </div>
      </article>

      <article className="EB_Share">
        <p>
          Paid by <span>you</span> and split <span>equally</span>
        </p>
        <p>(₹0.00/person)</p>
      </article>

      <article className="EB_OtherBtns">
        <button>calendar</button>
        <button>Select Group</button>
      </article>

      <article className="EB_SaveBtn">
        <button>Cancel</button>
        <button>Save</button>
      </article>
    </section>
  );
}
