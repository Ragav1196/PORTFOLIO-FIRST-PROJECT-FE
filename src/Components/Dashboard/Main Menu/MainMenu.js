import { Dashboard } from "./Dashboard/Dashboard";
import "./MainMenu.css";

export function MainMenu() {
  return (
    <section className="MM_MainCntr">
      <article>
        <Dashboard />
      </article>
    </section>
  );
}
