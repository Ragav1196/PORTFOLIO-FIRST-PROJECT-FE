import { createContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Authentication/Login/Login";
import { SignUp } from "../Authentication/Sign Up/SignUp";
import { MainPage as FriendsAddExpense } from "../Expenses/Add Expenses/Add Expenses For Friends/MainPage";
import { DashboardMainContent } from "../Dashboard/MainContent/DashboardMainContent";
import { MainContent as FriendsMainContent } from "../Expenses/Expense Dashboard/Friends Expense Dashboard/MainContent/MainContent";
import { NewGroups } from "../New Groups/NewGroups";
import { Home } from "../Home Page/Home";
import { TopBar } from "../Top Bar/Top Bar";
import { NewFriends } from "../New Friends/NewFriends";
import { FriendsListFn, GroupsListFn } from "../GetDataFrmDatabase";
import { MainContent as GroupsMainContent } from "../Expenses/Expense Dashboard/Group Expense Dashboard/MainContent/MainContent";
import { MainPage as GroupsAddExpense } from "../Expenses/Add Expenses/Add Expenses For Groups/MainPage";

// USING USE CONTEXT
export const LinksContext = createContext({});

export function Links({ decodedObj }) {
  // TO SAVE FRIENDS LIST FROM DATABASE
  const [frndsLst, setFrndsLst] = useState([]);

  // TO SAVE GROUPS LIST FROM DATABASE
  const [grpsLst, setGrpsLst] = useState(null);

  // TO SHOW OR HIDE THE ADD EXPENSE CONTAINER
  const [showAddExp, SetShowAddExp] = useState(false);

  // STORING THE EXPENSE DATA FROM THE DATABASE FOR FRIENDS TO THIS STATE
  const [expensesFrmDb, setExpensesFrmDb] = useState({});

  // STORING GROUP EXPENSE DETAILS FROM THE DATABASE
  const [grpExpensesFrmDb, setGrpExpensesFrmDb] = useState({});

  // CREATING OBJECT TO USE IN USECONTEXT
  const obj = {
    frndsLst,
    setFrndsLst,
    grpsLst,
    setGrpsLst,
    showAddExp,
    SetShowAddExp,
    expensesFrmDb,
    setExpensesFrmDb,
    grpExpensesFrmDb,
    setGrpExpensesFrmDb,
  };

  // GETTING FRIENDS FROM BACKEND
  useEffect(() => {
    if (decodedObj) {
      const FriendsList = FriendsListFn(decodedObj);
      FriendsList.then((data) => {
        if (!data.Access) {
          return;
        }
        setFrndsLst(data);
      });
    }
  }, [decodedObj]);

  // GETTING GROUPS FROM BACKEND
  useEffect(() => {
    if (decodedObj) {
      const GroupsList = GroupsListFn(decodedObj);
      GroupsList.then((data) => {
        if (!data.Access) {
          return;
        }
        setGrpsLst(data.groupsDetails);
      });
    }
  }, [decodedObj]);

  return (
    <LinksContext.Provider value={obj}>
      <Switch>
        {/* HOME PAGE */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* LOGIN */}
        <Route exact path="/login">
          <Login setFrndsLst={setFrndsLst} setGrpsLst={setGrpsLst} />
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
        <Route path="/friends/:user_id/:friend_id">
          <TopBar />
          <FriendsMainContent />
          <FriendsAddExpense />
        </Route>

        {/* ADD FRIEND */}
        <Route path="/friend/new">
          <NewFriends setFrndsLst={setFrndsLst} />
        </Route>

        {/* GROUPS */}
        <Route path="/groups/:id">
          <TopBar />
          <GroupsMainContent />
          <GroupsAddExpense />
        </Route>

        {/* ADD GROUP */}
        <Route path="/group/new">
          <NewGroups setGrpsLst={setGrpsLst} />
        </Route>
      </Switch>
    </LinksContext.Provider>
  );
}
