import { LeftMenu } from "../Left Menu/LeftMenu";
import { MainMenu } from "../Main Menu/MainMenu";
import "./DashboardMainContent.css";

export function DashboardMainContent() {
  return (
    <section className={"MC_MainCntr"}>
      <LeftMenu />
      <MainMenu />
    </section>
  );
}
