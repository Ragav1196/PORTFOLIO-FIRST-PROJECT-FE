import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./AddExpense.css";
import { context } from "../../Routes/Links";
import { SearchNames, DeleteFrndName } from "./functions";
import { FriendsNamesCntr } from "./FriendsNamesCntr";
import { ExpenseBody } from "../Expense Body/ExpenseBody";

export function AddExpense({ showAddExp, SetShowAddExp }) {
  // GETTING FRND NAME FROM DATABASE THROUGH USECONTEXT
  const { frndsLst } = useContext(context);

  //   TO SHOW OR HIDE SEARCH RESULTS
  const [search, setSearch] = useState([]);

  // TO ADD FRIENDS NAME BESIDE SEARCH FIELD
  const [addFriend, setAddFriend] = useState([]);

  // TO CHANGE THE SEARCH INPUT FIELD
  const [input, setInput] = useState("");

  // TO ADD AN ARRAY OF FRIENDS LIST TO THE "addFriend" USESTATE
  let FriendsArr = [];
  FriendsArr.push(...addFriend);

  function IsFriendsNameSame(data) {
    let isNameSame = true;
    for (let i = 0; i < FriendsArr.length; i++) {
      if (FriendsArr[i] === data) {
        isNameSame = false;
      }
    }
    if (isNameSame) {
      return data;
    } else {
      return 0;
    }
  }

  const FriendName = addFriend[0];

  return (
    <section className={`AE_MainCntr ${showAddExp ? "" : "AE_MainCntrDisp"}`}>
      {showAddExp ? (
        <article className="AE_AddExpCntr">
          <div className="AE_Heading">
            <p>Add An Expense</p>
            <IconButton
              onClick={() => SetShowAddExp(false)}
              aria-label="delete"
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="AE_Details">
            <div
              style={{ borderBottomColor: search[0] ? "black" : "#ccc" }}
              className="AE_SearchFriends"
            >
              <p style={{ marginTop: addFriend[0] ? "4px" : "-3px" }}>
                With you and :
              </p>

              {/* <div>
                {addFriend
                  ? addFriend.map((data, i) => (
                      <Stack id="AE_Chip" key={i} direction="row" spacing={1}>
                        <Chip
                          avatar={
                            <Avatar
                              alt="Natacha"
                              src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey5-100px.png"
                            />
                          }
                          label={data}
                          variant="outlined"
                          onDelete={() =>
                            DeleteFrndName(data, addFriend, setAddFriend)
                          }
                        />
                      </Stack>
                    ))
                  : ""}

                <input
                  onChange={(e) => {
                    setInput(e.target.value);
                    SearchNames(e, frndsLst, setSearch);
                  }}
                  type="text"
                  placeholder="Enter Your Friend name"
                  value={input}
                />
              </div> */}
            </div>

            {/* <FriendsNamesCntr
              search={search}
              IsFriendsNameSame={IsFriendsNameSame}
              setAddFriend={setAddFriend}
              setSearch={setSearch}
              setInput={setInput}
              FriendsArr={FriendsArr}
              FriendName={FriendName}
            /> */}
            <ExpenseBody FriendName={FriendName} />
          </div>
        </article>
      ) : (
        ""
      )}
    </section>
  );
}










import { ExpenseBody } from "../Expense Body/ExpenseBody";

export function FriendsNamesCntr({
  search,
  IsFriendsNameSame,
  setAddFriend,
  setSearch,
  setInput,
  FriendsArr,
  FriendName,
}) {
  return (
    <div className="AE_FriendsNamesCntr">
      <ExpenseBody FriendName={FriendName} />
      <div>
        {search
          ? search.map((data, i) => (
              <div
                key={i}
                onClick={() => {
                  if (FriendsArr[0]) {
                    const result = IsFriendsNameSame(data);
                    if (result) {
                      FriendsArr.push(result);
                      setAddFriend(FriendsArr);
                      setSearch([]);
                      setInput("");
                      return;
                    }
                  } else {
                    FriendsArr.push(data);
                    setAddFriend(FriendsArr);
                    setSearch([]);
                    setInput("");
                    return;
                  }
                }}
                className="AE_FriendsNames"
              >
                <img
                  src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey5-100px.png"
                  alt="Profile"
                />
                <p>{data}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
