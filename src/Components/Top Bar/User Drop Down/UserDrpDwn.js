import { useHistory } from "react-router-dom";
import "./UserDrpDwn.css";

export function UserDrpDwn({ hideUDD }) {
  const history = useHistory();

  return (
    <section className="UDD_MainCntr">
      {hideUDD ? (
        <>
          <p>Your account</p>
          <p>Create a group</p>
          <p>Fairness calculators</p>
          <p>Contact support</p>
          <p onClick={() => history.push("/")}>Log out</p>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
