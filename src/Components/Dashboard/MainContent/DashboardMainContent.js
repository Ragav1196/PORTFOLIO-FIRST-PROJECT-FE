import { LeftMenu } from "../Left Menu/LeftMenu";
import { MainMenu } from "../Main Menu/MainMenu";
import "./DashboardMainContent.css";

export function DashboardMainContent({ showAddExp, SetShowAddExp }) {
  return (
    <section className={`MC_MainCntr ${showAddExp ? "MC_MainCntrOpac" : ""}`}>
      <LeftMenu />
      <MainMenu SetShowAddExp={SetShowAddExp} />
    </section>
  );
}
