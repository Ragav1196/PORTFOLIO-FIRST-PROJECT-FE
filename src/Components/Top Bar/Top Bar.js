import { useContext, useState } from "react";
import { decodeToken } from "react-jwt";
import { useHistory } from "react-router-dom";
import { LinksContext } from "../Routes/Links";
import "./Top Bar.css";
import { UserDrpDwn } from "./User Drop Down/UserDrpDwn";

export function TopBar() {
  const history = useHistory();

  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  const { showAddExp } = useContext(LinksContext);

  // TO HIDE USER DROP DOWN MENU
  const [hideUDD, setHideUDD] = useState(false);
  return (
    <section className={`TB_mainCntr ${showAddExp ? "TB_mainCntrOpac" : ""}`}>
      <article
        onClick={() => {
          history.push("/dashboard");
          window.location.reload();
        }}
      >
        <img
          className="TB_logo"
          src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg"
          alt="Logo"
        />
      </article>

      <article onClick={() => setHideUDD(!hideUDD)}>
        <img
          className="TB_profilePic"
          src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby12-50px.png"
          alt="Profile pic"
        />
        <p className="TB_ProfileName">{decodedObj?.id.name}</p>
        <UserDrpDwn hideUDD={hideUDD} />
      </article>
    </section>
  );
}
