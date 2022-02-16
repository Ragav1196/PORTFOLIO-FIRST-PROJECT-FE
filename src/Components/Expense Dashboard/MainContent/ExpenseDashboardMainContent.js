// import { LeftMenu } from "../Left Menu/LeftMenu";
import { LeftMenu } from "../../Dashboard/Left Menu/LeftMenu";
import { MainMenu } from "../Main Menu/MainMenu";
// import { MainMenu } from "../Main Menu/MainMenu";
import "./ExpenseDashboardMainContent.css";

export function FriendsMainContent({ SetShowAddExp }) {
  return (
    <section className="MC_MainCntr">
      <LeftMenu />
      <MainMenu SetShowAddExp={SetShowAddExp} />
    </section>
  );
}
