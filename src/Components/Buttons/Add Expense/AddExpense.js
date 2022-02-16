import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./AddExpense.css";
import { ExpenseBody } from "../Expense Body/ExpenseBody";

export function AddExpense({ showAddExp, SetShowAddExp }) {
  const names = [
    "Rajesh",
    "Sabari",
    "Vishal",
    "Ragav",
    "Sailesh",
    "Renjith",
    "Ramachandran",
  ];

  //   TO SHOW OR HIDE SEARCH RESULTS
  const [search, setSearch] = useState([]);

  // TO ADD FRIENDS NAME BESIDE SEARCH FIELD
  const [addFriend, setAddFriend] = useState([]);

  // TO CHANGE THE SEARCH INPUT FIELD
  const [input, setInput] = useState("");

  //   FUNCTION TO FIND SEARCH RESULTS
  function SearchNames(e) {
    const Letter = e.target.value.toLowerCase();
    const LetterLength = Letter.length;

    function SearchLetter() {
      if (LetterLength > 0) {
        const result = [];

        names.map((data) => {
          data = data.toLowerCase();
          const NamesSplitArr = [];
          const nameLength = data.length;

          for (let j = 0; j < nameLength; j += LetterLength) {
            const NamesInLetters = data.substring(j, j + LetterLength);
            NamesSplitArr.push(NamesInLetters);
          }

          for (let i = 0; i < NamesSplitArr.length; i++) {
            if (Letter === NamesSplitArr[i]) {
              result.push(data);
              return 0;
            }
          }
          return 0;
        });
        setSearch(result);
      } else {
        setSearch([]);
      }
    }
    SearchLetter();
  }

  // TO ADD AN ARRAY OF FRIENDS LIST TO THE "addFriend" USESTATE
  let FriendsArr = [];
  FriendsArr.push(...addFriend);

  function IsFriendsNameSame(data) {
    let isNameSame = true;
    for (let i = 0; i < FriendsArr.length; i++) {
      if (FriendsArr[i] == data) {
        isNameSame = false;
      }
    }
    if (isNameSame) {
      return data;
    } else {
      return 0;
    }
  }

  // TO DELETE A FRIENDS NAME FROM THE "addFriend" USESTATE
  function DeleteFrndName(data) {
    let frndsList = [];
    frndsList.push(...addFriend);
    const newArr = frndsList.filter((FrndName) => FrndName != data);
    setAddFriend(newArr);
  }

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

              <div>
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
                          onDelete={() => DeleteFrndName(data)}
                        />
                      </Stack>
                    ))
                  : ""}

                <input
                  onChange={(e) => {
                    setInput(e.target.value);
                    SearchNames(e);
                  }}
                  type="text"
                  placeholder="Enter Your Friend name"
                  value={input}
                />
              </div>
            </div>

            <div className="AE_FriendsNamesCntr">
              {/* {!input ? <ExpenseBody /> : ""} */}
              <ExpenseBody />
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
          </div>
        </article>
      ) : (
        ""
      )}
    </section>
  );
}
