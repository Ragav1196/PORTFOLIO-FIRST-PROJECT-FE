import "./Dashboard.css";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { Balances, Expenses } from "./Data";
import { useHistory } from "react-router-dom";

export function Dashboard() {
  const history = useHistory();

  // TO REMOVE RIGHT BORDER WHEN DETAILS IS EMPTY
  const BorderRightStyles = {
    borderRight: Expenses[0] ? "1px solid rgb(151 146 145)" : "0px",
  };

  // TO CHANGE THE DETAILS CONTAINER FROM FLEX TO BLOCK WHEN DETAILS IS EMPTY
  const FlexToInitialStyles = {
    display: Expenses[0] ? "flex" : "block",
  };
  return (
    <section className="DB_MainCntr">
      <article className="DB_Header">
        <h1>DASHBOARD</h1>
      </article>

      {Expenses[0] ? (
        <article className="DB_balances">
          {Balances.map((data, i) => (
            <div key={i}>
              <p>{data.heading}</p>
              <p>{data.value}</p>
            </div>
          ))}
        </article>
      ) : (
        ""
      )}

      {Expenses[0] ? (
        <article className="DB_DetailsHeading">
          <h1>YOU OWE</h1>
          <div>
            <Button variant="outlined" startIcon={<FormatListBulletedIcon />}>
              View as list
            </Button>

            <Button variant="outlined" startIcon={<InsertChartIcon />}>
              View as chart
            </Button>
          </div>
          <h1>YOU ARE OWED</h1>
        </article>
      ) : (
        ""
      )}

      <article style={FlexToInitialStyles} className="DB_Details">
        <div style={BorderRightStyles}>
          {Expenses[0] ? (
            Expenses.map((data, i) => (
              <>
                {data.isYouOwe ? (
                  <div key={i} className="DB_YouOwesCntr">
                    <section onClick={() => history.push(`/friend/${data.id}`)}>
                      <div className="DB_ProfPicCntr">
                        <img src={data.image} alt="Profile" />
                      </div>
                      <div>
                        <h3>{data.name}</h3>
                        <p>
                          You owe <span>{data.amount}</span>
                        </p>
                      </div>
                    </section>
                    <section>
                      <ul>
                        <li>
                          You owe {data.name}
                          <span>{data.group[0].amount}</span> for
                          {data.group[0].name}
                        </li>
                      </ul>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))
          ) : (
            <div className="DB_EmptyDetailsCntr">
              <img
                src="https://assets.splitwise.com/assets/fat_rabbit/person-2d59b69b3e7431884ebec1a55de75a4153a17c4050e6b50051ca90412e72cf96.png"
                alt="Empty dashboard"
              />

              <div>
                <h1>Welcome To Splitwise!</h1>
                <p>Splitwise helps you split bills with friends</p>
                <p>Click "Add an expense" above to get started</p>
              </div>
            </div>
          )}
        </div>

        <div>
          {Expenses.map((data, i) => (
            <>
              {data.isYouAreOwed ? (
                <div key={i} className="DB_YouAreOwedCntr">
                  <section onClick={() => history.push(`/friend/${data.id}`)}>
                    <div className="DB_ProfPicCntr">
                      <img src={data.image} alt="Profile" />
                    </div>
                    <div>
                      <h3>{data.name}</h3>
                      <p>
                        Owes you <span>{data.amount}</span>
                      </p>
                    </div>
                  </section>
                  <section>
                    <ul>
                      <li>
                        {data.name} Owes you <span>{data.group[0].amount}</span>{" "}
                        for {data.group[0].name}
                      </li>
                    </ul>
                  </section>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </article>
    </section>
  );
}
