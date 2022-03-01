export function IndividualExpensesDetails() {
  return (
    <section className="individualExpenseDetailsCntr">
      <article>
        <img
          src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
          alt=""
        />
        <div>
          <p>Description</p>
          <p>₹Total Amount</p>
          <p>Added by You on February 22, 2022</p>
        </div>
      </article>

      <article>
        <div>
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
            alt="User"
            className="userImg"
          />
          <p>
            You paid <span>₹0</span> and lent Akshaya <span>₹0</span>
          </p>
        </div>

        <div>
          <img
            src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/utilities/tv-phone-internet@2x.png"
            alt="User"
            className="userImg"
          />
          <p>
            You paid <span>₹0</span> and lent Akshaya <span>₹0</span>
          </p>
        </div>
      </article>
    </section>
  );
}
