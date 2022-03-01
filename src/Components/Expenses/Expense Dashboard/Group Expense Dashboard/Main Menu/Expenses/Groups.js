import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { context } from "../../../../../Routes/Links";
import "./Groups.css";
import { IndividualExpenses } from "./IndividualExpenses";

export function Groups() {
  const history = useHistory();
  const { id } = useParams();
  const { SetShowAddExp } = useContext(context);
  return (
    <section className="G_MainCntr">
      <article className="G_Header">
        <h1>Friend Name</h1>
        <div>
          <button className="btnDfltStyle" onClick={() => SetShowAddExp(true)}>
            Add Expense
          </button>
          <button className="btnDfltStyle">Settle Up</button>
        </div>
      </article>

      <IndividualExpenses />
    </section>
  );
}
