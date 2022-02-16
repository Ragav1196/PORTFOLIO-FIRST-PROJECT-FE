import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Expenses } from "../../../Dashboard/Main Menu/Dashboard/Data";
import "./Friend.css";

export function Groups() {
  const { id } = useParams();
  const history = useHistory();

  const data = Expenses.find((data) => {
    if (data.id == id) {
      return data;
    }
  });
  return (
    <article
      onClick={() => history.push(`/group/${id}`)}
      className="F_DetailsCntr"
    >
      <div className="F_Date">
        <p>
          {/* data.date
            .toLocaleString("default", { month: "short" })
            .toUpperCase() */}
        </p>
        <p>{/* data.date.getDate() */}</p>
      </div>

      <div className="F_GroupName">
        {/* <img src=data.image alt="" /> */}
        <p>{/* data.group[0].name */}</p>
      </div>

      <div className="G_Amount">
        <p>
          {/* data.isYouOwe || !data.isYouAreOwed ? "You owe" : "Owes you" */}
          {/* data.name */}
        </p>

        <p
          /* style={{
            color: data.isYouOwe || !data.isYouAreOwed ? "red" : "#5bc5a7",
          }} */
        >
          {/* data.amount */}
        </p>
      </div>
    </article>
  );
}
