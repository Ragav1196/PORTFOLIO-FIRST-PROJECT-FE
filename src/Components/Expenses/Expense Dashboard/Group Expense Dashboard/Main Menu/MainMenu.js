import { Groups } from "./Expenses/Groups";
import "./MainMenu.css";

export function MainMenu() {
  return (
    <section className="MM_MainCntr">
      <article>
        <Groups />
      </article>
    </section>
  );
}
