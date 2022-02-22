// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../Global Constants/GlobalConstants";
import { context } from "../../../Routes/Links";
import "./Friend.css";
import { IndividualExpenses } from "./IndividualExpenses";

export function Friend() {
  const { showAddExp, SetShowAddExp, expensesFrmDb, setExpensesFrmDb } =
    useContext(context);

  // GETTING USER AND FRIEND ID FROM THE URL
  const { user_id, friend_id } = useParams();

  // GETTING EXPENSE DATA FROM THE DATABASE
  async function GetExpenses() {
    if (!showAddExp) {
      const response = await fetch(
        `${API_URL}/get-friends-expenses/${user_id}/${friend_id}`
      )
        .then((data) => data.json())
        .then((data) => setExpensesFrmDb(data));
    }
    return;
  }

  // WHENEVER THE FRIEND ID IS CHANGED IN THE URL OR EXPENSE ADDED , THIS FUNCTION WILL BE CALLED
  useEffect(GetExpenses, [friend_id, showAddExp]);
  const { friend } = expensesFrmDb;

  return (
    <section className="F_MainCntr">
      {expensesFrmDb.friend ? (
        <>
          <article className="F_Header">
            <h1>{friend.name}</h1>
            <div>
              <button onClick={() => SetShowAddExp(true)}>Add Expense</button>
              <button>Settle Up</button>
            </div>
          </article>

          {/* <Groups /> */}
          <IndividualExpenses GetExpenses={GetExpenses} />
        </>
      ) : (
        ""
      )}
    </section>
  );
}
