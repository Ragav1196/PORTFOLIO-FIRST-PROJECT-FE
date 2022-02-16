import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Expenses } from "../../../Dashboard/Main Menu/Dashboard/Data";
import "./Friend.css";
import { Groups } from "./Groups";
import { IndividualExpenses } from "./IndividualExpenses";

export function Friend() {
  const { id } = useParams();

  const data = Expenses.find((data) => {
    if (data.id == id) {
      return data;
    }
  });

  const individualExpenses = [
    {
      id: 1,
      name: "Rajesh",
      image:
        "https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue2-100px.png",
      amount: "₹46.00",
      lentAmount: "92",
      date: new Date(2021, 0, 1),
      isYouOwe: false,
      isYouAreOwed: true,
    },
  ];

  return (
    <section className="F_MainCntr">
      <article className="F_Header">
        <h1>{/* {data.name} */}</h1>
        <div>
          <button>Add Expense</button>
          <button>Settle Up</button>
        </div>
      </article>

      <Groups />
      <IndividualExpenses />
      <IndividualExpenses />
      <IndividualExpenses />
      <IndividualExpenses />
    </section>
  );
}
