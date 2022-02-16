import { Friend } from "./Expenses/Friend";
import "./MainMenu.css";

export function MainMenu({ SetShowAddExp }) {
  return (
    <section className="MM_MainCntr">
      <article>
        <Friend SetShowAddExp={SetShowAddExp} />
      </article>
    </section>
  );
}
