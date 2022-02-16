import { useState } from "react";
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

export function Links() {
  //   TO SHOW OR HIDE THE ADD EXPENSE CONTAINER
  const [showAddExp, SetShowAddExp] = useState(false);

  return (
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
        <TopBar showAddExp={showAddExp} />
        <DashboardMainContent
          showAddExp={showAddExp}
          SetShowAddExp={SetShowAddExp}
        />
        <AddExpense showAddExp={showAddExp} SetShowAddExp={SetShowAddExp} />
      </Route>

      {/* FRIENDS */}
      <Route path="/friends/:id">
        <TopBar />
        <FriendsMainContent />
      </Route>

      <Route path="/friend/new">
        <NewFriends />
      </Route>

      {/* GROUPS */}
      <Route path="/groups/:id">
        <TopBar />
        <FriendsMainContent />
      </Route>

      <Route path="/group/new">
        <NewGroups />
      </Route>
    </Switch>
  );
}
