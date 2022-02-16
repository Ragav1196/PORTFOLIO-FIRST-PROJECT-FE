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
