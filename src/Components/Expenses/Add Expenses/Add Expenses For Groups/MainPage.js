import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./MainPage.css";
import { ChoosePayer } from "./ChoosePayer";
// import Avatar from "@mui/material/Avatar";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
// import { SearchNames, DeleteFrndName } from "./functions";
// import { FriendsNamesCntr } from "./FriendsNamesCntr";
import { LinksContext } from "../../../Routes/Links";
import { ExpenseBody } from "./ExpenseBody";

export function MainPage() {
  const { showAddExp, SetShowAddExp, grpExpensesFrmDb } =
    useContext(LinksContext);

  const membersArr = grpExpensesFrmDb.members; //TAKING OUT THE MEMBERS ARRAY

  // TO SHOW/HIDE THE "ChoosePayer" COMPONENT
  const [moveCntrs, setMoveCntrs] = useState(false);
  const styles = {
    transform: moveCntrs ? "translate(0px, 0px)" : "translate(200px, 0px)",
  };

  // TO SHOW OR HIDE THE MULTIPLE PAYER FORM WHERE USERS CAN SPLIT AND RECORD THE TOTAL AMOUNT BETWEEN THEM
  const [multPayer, setMultPayer] = useState(false);

  /* //   TO SHOW OR HIDE SEARCH RESULTS
  const [search, setSearch] = useState([]); */

  // TO SET WHO IS PAYING THE CURRENT EXPENSE
  const [paidPersn, setPaidPersn] = useState("You");

  // TO SET THE TOTAL AMOUNT SPENT FOR THE CURRENT EXPENSE
  const [totalAmt, setTotalAmt] = useState(0);

  // TO ADD FRIENDS NAME BESIDE SEARCH FIELD
  const [addFriend, /* setAddFriend */] = useState([]);

  /* // TO CHANGE THE SEARCH INPUT FIELD
  const [input, setInput] = useState(""); */

  // TO SET PAYMENT DETAILS WHERE MULTIPLE USERS SHARE THE AMOUNT
  const [multiplePayment, setMultiplePayment] = useState({});

  // TO ADD AN ARRAY OF FRIENDS LIST TO THE "addFriend" USESTATE
  let FriendsArr = [];
  FriendsArr.push(...addFriend);

  /* function IsFriendsNameSame(data) {
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
  } */

  const FriendName = addFriend[0];

  return (
    <section className={`AE_MainCntr ${showAddExp ? "" : "AE_MainCntrDisp"}`}>
      {showAddExp ? (
        <article style={styles} className="AE_AddExpCntr">
          <div className="AE_Heading">
            <p>Add An Expense</p>
            <IconButton
              onClick={() => {
                setMultPayer(false);
                setMoveCntrs(false);
                SetShowAddExp(false);
              }}
              aria-label="delete"
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="AE_Details">
            {/* <div
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
                    SearchNames(e, membersArr, setSearch);
                  }}
                  type="text"
                  placeholder="Enter Your Friend name"
                  value={input}
                />
              </div>
            </div>

            <FriendsNamesCntr
              search={search}
              IsFriendsNameSame={IsFriendsNameSame}
              setAddFriend={setAddFriend}
              setSearch={setSearch}
              setInput={setInput}
              FriendsArr={FriendsArr}
              FriendName={FriendName}
              setMoveCntrs={setMoveCntrs}
              moveCntrs={moveCntrs}
            /> */}

            <ExpenseBody
              moveCntrs={moveCntrs}
              setMoveCntrs={setMoveCntrs}
              FriendName={FriendName}
              multPayer={multPayer}
              setMultPayer={setMultPayer}
              paidPersn={paidPersn}
              setPaidPersn={setPaidPersn}
              totalAmt={totalAmt}
              setTotalAmt={setTotalAmt}
              multiplePayment={multiplePayment}
              membersArr={membersArr}
            />
          </div>
        </article>
      ) : (
        ""
      )}

      <ChoosePayer
        membersArr={membersArr}
        moveCntrs={moveCntrs}
        setMoveCntrs={setMoveCntrs}
        multPayer={multPayer}
        setMultPayer={setMultPayer}
        paidPersn={paidPersn}
        setPaidPersn={setPaidPersn}
        setTotalAmt={setTotalAmt}
        multiplePayment={multiplePayment}
        setMultiplePayment={setMultiplePayment}
      />
    </section>
  );
}
