import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./NewGroups.css";
import { API_URL } from "../Global Constants/GlobalConstants";
import { useHistory } from "react-router-dom";

export function NewGroups() {
  const history = useHistory();
  // TO ADD TWO MORE INPUT FIELDS WHEN THE MAIN FIELD IS TYPED
  const [typed, setTyped] = useState(false);

  // TO ADD MORE INPUT FIELDS FOR ADDING MEMBERS
  const [addField, setAddField] = useState(3);

  // TO HIDE OR SHOW THE TWO MORE INPUT FIELDS
  const styles = {
    maxHeight: typed ? "100%" : "0px",
    // marginBottom: typed ? "20px" : "0px",
  };

  // TO PUSH THE NEW GROUP TO THE SERVER
  async function AddGroup(groupInfo) {
    const response = await fetch(`${API_URL}/add-friends`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupInfo),
    });

    const data = await response.json();
    console.log(data);
    if (data.Access) {
      localStorage.setItem("Token", data.Token);
      return history.push("/dashboard");
    }

    // setIsFrndAdded(false);
    // setErrorMsg(data.message);
  }

  const formValidationSchema = yup.object({
    groupName: yup.string().required("Please give your name"),
    // friendName: yup.string().required("Please give your name"),
    // friendEmail: yup
    //   .string()
    //   .required("Please give your E-mail")
    //   .matches(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //     "E-mail pattern doesn't match"
    //   ),
  });

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        groupName: "",
        friendName: "",
        friendEmail: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (groupInfo) => {
        console.log(groupInfo);
        // AddGroup(groupInfo);
      },
    });


  return (
    <section className="NG_MainCntr">
      <article>
        <img
          src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
          alt="Logo"
        />

        <div>
          <form onSubmit={handleSubmit}>
            <p>START A NEW GROUP</p>
            <label className="NG_InputLabelMain" htmlFor="name">
              <div>My group shall be called…</div>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="groupName"
                value={values.groupName}
                type="text"
                id="groupName"
              />
              {/* errors.groupName && touched.groupName ? (
                <div className="NG_Error">{errors.groupName}</div>
              ) : (
                ""
              ) */}
            </label>

            <div style={styles} className="NG_HiddenInput">
              <h1>GROUP MEMBERS</h1>
              <label className="NG_InputLabel">
                <img
                  src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue8-50px.png"
                  alt=""
                />
                <p>Ragavendiran (ragavinrap@gmail.com)</p>
              </label>

              {[...Array(addField)].map((data, i) => (
                <label key={i} className="NG_InputLabel" htmlFor="email">
                  {console.log(i)}
                  <img
                    src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue8-50px.png"
                    alt="Profile"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.friendName}
                    name={`friendName-${i + 1}`}
                    id={`friendName`}
                  />
                  <input
                    type="email"
                    name={`friendEmail-${i + 1}`}
                    placeholder="E-mail address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.friendEmail}
                    id={`friendEmail`}
                  />
                  {/* {errors.friendEmail && touched.friendEmail ? (
                    <div className="NG_Error">{errors.friendEmail}</div>
                  ) : (
                    ""
                  )} */}
                </label>
              ))}

              <p
                onClick={() => {
                  setAddField(addField + 1);
                }}
                className="NG_AddPersons"
              >
                + Add a person
              </p>
            </div>

            <div id="NG_AddPersons">
              <button type="submit">SAVE</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}








