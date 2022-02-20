import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./NewFriends.css";
import { API_URL } from "../Global Constants/GlobalConstants";
import { useHistory } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useJwt } from "react-jwt";
import { FriendsListFn } from "../GetDataFrmDatabase";

export function NewFriends({ setFrndsLst }) {
  const history = useHistory();

  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");
  const decodedObj = decodeToken(Token);

  // TO REASSIGN A NEW TOKEN
  const { reEvaluateToken } = useJwt(Token);

  // TO CHANGE THE BUTTON CONTENT TO SHOW ADDING PROGRESS
  const [isFrndAdded, setIsFrndAdded] = useState(false);
  const btnStyles = {
    backgroundColor: isFrndAdded ? "rgb(235 116 75)" : "#ff5216",
  };

  // TO SHOW ERROR MESSAGE WHEN ERROR ENCOUNTERD FROM THE BACK END
  const [errorMsg, setErrorMsg] = useState("");

  // TO PUSH THE NEW FRIEND TO THE SERVER
  async function AddFriend(userInfo) {
    const response = await fetch(`${API_URL}/add-friends`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if (data.Access) {
      localStorage.setItem("Token", data.Token);

      // REASSIGNING NEW TOKEN TO THE JWT STATE
      const newToken = localStorage.getItem("Token");
      reEvaluateToken(newToken);
      const decodedObj = decodeToken(newToken);

      // TO ADD THE NEWLY ADDED FRIEND TO THE MAIN LIST
      FriendsListFn(decodedObj).then((data) => {
        if (!data.Access) {
          return;
        }
        setFrndsLst(data);
      });

      return history.push("/dashboard");
    }

    setIsFrndAdded(false);
    setErrorMsg(data.message);
  }

  // FORM VALIDATION
  const formValidationSchema = yup.object({
    friendName: yup.string().required("Please Provide a friend name"),
  });

  // FORMIK
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        friendName: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (userInfo) => {
        userInfo.username = decodedObj.id.name;
        setIsFrndAdded(true);
        AddFriend(userInfo);
      },
    });

  return (
    <section className="NF_MainCntr">
      <article>
        <img
          src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
          alt="Logo"
        />

        <div>
          <form onSubmit={handleSubmit}>
            <p>START A NEW FRIENDSHIP</p>
            <label className="NF_InputLabelMain" htmlFor="friendName">
              <div>My new friend name is…</div>
              <input
                onClick={() => setErrorMsg("")}
                onChange={handleChange}
                onBlur={handleBlur}
                name="friendName"
                value={values.friendName}
                type="text"
                id="friendName"
              />
              {errors.friendName && touched.friendName ? (
                <div className="NF_Error">{errors.friendName}</div>
              ) : (
                ""
              )}
              <div className="NF_ErrorMsg">
                {errorMsg ? <p>{errorMsg}</p> : ""}
              </div>
            </label>

            <div id="NF_AddPersons">
              <button style={btnStyles} type="submit">
                {isFrndAdded ? "ADDING....." : "ADD"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
