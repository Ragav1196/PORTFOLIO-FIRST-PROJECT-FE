import { createContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Authentication/Login/Login";
import { SignUp } from "../Authentication/Sign Up/SignUp";
import { AddExpense } from "../Buttons/Add Expense/AddExpense";
import { DashboardMainContent } from "../Dashboard/MainContent/DashboardMainContent";
import { FriendsMainContent } from "../Expense Dashboard/MainContent/ExpenseDashboardMainContent";
import { NewGroups } from "../New Groups/NewGroups";
import { Home } from "../Home Page/Home";
import { TopBar } from "../Top Bar/Top Bar";
import { NewFriends } from "../New Friends/NewFriends";
import { FriendsListFn, GroupsListFn } from "../GetDataFrmDatabase";
import { decodeToken } from "react-jwt";

// USING USE CONTEXT TO SAVE DATA FROM DB
export const context = createContext({});

export function Links() {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // TO SAVE FRIENDS LIST FROM DATABASE
  const [frndsLst, setFrndsLst] = useState(null);

  // TO SAVE GROUPS LIST FROM DATABASE
  const [grpsLst, setGrpsLst] = useState([]);

  // CREATING OBJECT WITH THE DATA FROM THE DB TO USE IN USECONTEXT
  const obj = {
    frndsLst,
    setFrndsLst,
    grpsLst,
    setGrpsLst,
  };

  // GETTING FRIENDS FROM BACKEND
  useEffect(() => {
    const FriendsList = FriendsListFn(decodedObj);
    FriendsList.then((data) => {
      if (!data.Access) {
        return;
      }
      setFrndsLst(data);
    });
  }, []);

  // GETTING GROUPS FROM BACKEND
  useEffect(() => {
    const GroupsList = GroupsListFn(decodedObj);
    GroupsList.then((data) => {
      if (!data.Access) {
        return;
      }

      const GroupsName = data.GroupName.map((data) => data);
      setGrpsLst(GroupsName);
    });
  }, []);

  // TO SHOW OR HIDE THE ADD EXPENSE CONTAINER
  const [showAddExp, SetShowAddExp] = useState(false);

  return (
    <context.Provider value={obj}>
      <Switch>
        {/* HOME PAGE */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* LOGIN */}
        <Route exact path="/login">
          <Login />
        </Route>
        {/* SIGN UP */}
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        {/* DASHBOARD */}
        <Route path="/dashboard">
          <TopBar />
          <DashboardMainContent />
        </Route>
        {/* FRIENDS */}
        <Route path="/friends/:id">
          <TopBar showAddExp={showAddExp} />
          <FriendsMainContent SetShowAddExp={SetShowAddExp} />
          <AddExpense showAddExp={showAddExp} SetShowAddExp={SetShowAddExp} />
        </Route>
        <Route path="/friend/new">
          <NewFriends setFrndsLst={setFrndsLst} />
        </Route>
        {/* GROUPS */}
        <Route path="/groups/:id">
          <TopBar />
          <FriendsMainContent />
        </Route>
        <Route path="/group/new">
          <NewGroups setGrpsLst={setGrpsLst} />
        </Route>
      </Switch>
    </context.Provider>
  );
}
