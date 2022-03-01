// import { LeftMenu } from "../Left Menu/LeftMenu";
import { LeftMenu } from "../../../../Dashboard/Left Menu/LeftMenu";
import { MainMenu } from "../Main Menu/MainMenu";
// import { MainMenu } from "../Main Menu/MainMenu";
import "./MainContent.css";

export function MainContent() {
  return (
    <section className="MC_MainCntr">
      <LeftMenu />
      <MainMenu />
    </section>
  );
}
