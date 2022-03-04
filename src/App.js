import "./App.css";
import "./Components/Common CSS Files/Expenses/AddExpense.css";
import "./Components/Common CSS Files/Expenses/MainMenu.css";
import "./Components/Common CSS Files/Expenses/MainContent.css";
import "./Components/Common CSS Files/Expenses/Friend.css";
import "./Components/Common CSS Files/Expenses/ExpenseBody.css";
import { Links } from "./Components/Routes/Links";
import { decodeToken } from "react-jwt";

function App() {
  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  return (
    <div className="App">
      <Links decodedObj={decodedObj} />
    </div>
  );
}

export default App;
