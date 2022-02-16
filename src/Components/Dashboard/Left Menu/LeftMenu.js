import { FriendsNames } from "./FriendsNames";
import { GroupNames } from "./GroupNames";
import FlagIcon from "@mui/icons-material/Flag";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./LeftMenu.css";
import { useHistory } from "react-router-dom";

export function LeftMenu() {
  const history = useHistory();
  return (
    <section className="LM_MainCntr">
      <article>
        <div
          onClick={() => history.push("/dashboard")}
          className="LM_dashBoardIconCntr LM_cursor"
        >
          <div className="LM_logo"></div>
          <p>Dashboard</p>
        </div>

        <div className="LM_LogoEditCntr LM_cursor LM_lastCntr">
          <IconButton aria-label="delete">
            <FlagIcon />
          </IconButton>
          <p>Recent Activity</p>
        </div>

        <div className="LM_searchCntr">
          <IconButton aria-label="delete">
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Filter by name" />
        </div>

        <div className="LM_LogoEditCntr LM_cursor LM_lastCntr">
          <IconButton aria-label="delete">
            <FormatListBulletedIcon />
          </IconButton>
          <p>All Expenses</p>
        </div>
      </article>

      <article className="LM_GroupsCntr">
        <header className="LM_headerCntr">
          <p>Groups</p>
          <div>
            <IconButton aria-label="delete">
              <AddIcon />
            </IconButton>
            <p onClick={() => history.push("/group/new")}>Add</p>
          </div>
        </header>

        <ul>
          <GroupNames />
        </ul>
      </article>

      <article className="LM_FriendsCntr">
        <header className="LM_headerCntr">
          <p>Friends</p>
          <div>
            <IconButton aria-label="delete">
              <AddIcon />
            </IconButton>
            <p onClick={() => history.push("/friend/new")}>Add</p>
          </div>
        </header>

        <ul>
          <FriendsNames />
        </ul>
      </article>

      <article>
        <header className="LM_inviteCntr">
          <div>Invite Friends</div>
          <div>
            <input type="text" placeholder="Enter an Email address" />
            <button>Send Invite</button>
          </div>
        </header>
      </article>
    </section>
  );
}
