import { Dashboard } from "./Dashboard/Dashboard";
import "./MainMenu.css";

export function MainMenu({ SetShowAddExp }) {
  return (
    <section className="MM_MainCntr">
      <article>
        <Dashboard SetShowAddExp={SetShowAddExp} />
      </article>
    </section>
  );
}
