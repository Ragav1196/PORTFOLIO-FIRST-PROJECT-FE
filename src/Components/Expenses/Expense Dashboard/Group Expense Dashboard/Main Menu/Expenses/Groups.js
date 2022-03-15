import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../../../Global Constants/GlobalConstants";
import { LinksContext } from "../../../../../Routes/Links";
import "./Groups.css";
import { IndividualExpenses } from "./IndividualExpenses";

export function Groups() {
  const { id } = useParams();
  const { showAddExp, SetShowAddExp, grpExpensesFrmDb, setGrpExpensesFrmDb } =
    useContext(LinksContext);

  // // GETTING EXPENSE DETAILS FROM DATABASE
  // async function GetExpenses() {
  //   if (!showAddExp) {
  //     await fetch(`${API_URL}/get-groups-expenses/${id}`)
  //       .then((data) => data.json())
  //       .then((data) => setGrpExpensesFrmDb(data));
  //   }
  //   return;
  // }

  useEffect(() => {
    if (!showAddExp) {
      fetch(`${API_URL}/get-groups-expenses/${id}`)
        .then((data) => data.json())
        .then((data) => setGrpExpensesFrmDb(data));
    }
  }, [id, showAddExp, setGrpExpensesFrmDb]);

  const groupDetails = grpExpensesFrmDb.isGroupChannelExist; //SEPERATING GROUP DETAILS LEAVING MEMBERS ARRAY
  return (
    <>
      {groupDetails ? (
        <section className="G_MainCntr">
          <article className="G_Header">
            <h1>{groupDetails.name.toUpperCase()}</h1>
            <div>
              <button
                className="btnDefltStyle"
                onClick={() => SetShowAddExp(true)}
              >
                Add Expense
              </button>
              <button className="btnDefltStyle">Settle Up</button>
            </div>
          </article>

          <IndividualExpenses groupDetails={groupDetails} />
        </section>
      ) : (
        ""
      )}
    </>
  );
}
