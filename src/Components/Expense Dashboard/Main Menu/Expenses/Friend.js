// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Friend.css";
import { IndividualExpenses } from "./IndividualExpenses";

export function Friend({ SetShowAddExp }) {
  // const { id } = useParams();

  // Expenses.find((data) => {
  //   if (data.id === id) {
  //     return data;
  //   }
  //   return 0;
  // });

  return (
    <section className="F_MainCntr">
      <article className="F_Header">
        <h1>{/* {data.name} */}</h1>
        <div>
          <button onClick={() => SetShowAddExp(true)}>Add Expense</button>
          <button>Settle Up</button>
        </div>
      </article>

      {/* <Groups /> */}
      <IndividualExpenses />
      <IndividualExpenses />
      <IndividualExpenses />
      <IndividualExpenses />
    </section>
  );
}
