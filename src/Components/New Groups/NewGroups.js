import { useState } from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import * as yup from "yup";
import "./NewGroups.css";
import { API_URL } from "../Global Constants/GlobalConstants";
import { useHistory } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useJwt } from "react-jwt";
import { GroupsListFn } from "../GetDataFrmDatabase";

export function NewGroups({ setGrpsLst }) {
  const history = useHistory();

  // DECODING THE TOKEN
  const Token = localStorage.getItem("Token");

  // TO REASSIGN A NEW TOKEN
  const { reEvaluateToken } = useJwt(Token);

  // VALIDATION SCHEMA
  const Schema = yup.object().shape({
    groupName: yup.string().required("Please Provide a group name"),
    friendsList: yup
      .array()
      .of(yup.string().required("Please Provide friends name")),
  });

  // TO CHANGE THE BUTTON CONTENT TO SHOW ADDING PORGRESS
  const [isGroupAdded, setIsGroupAdded] = useState(false);
  const btnStyles = {
    backgroundColor: isGroupAdded ? "rgb(235 116 75)" : "#ff5216",
  };

  // TO SHOW ERROR MESSAGE WHEN ERROR ENCOUNTERD FROM THE BACK END
  const [errorMsg, setErrorMsg] = useState("");

  // TO ADD TWO MORE INPUT FIELDS WHEN THE MAIN FIELD IS TYPED
  const [typed, setTyped] = useState(false);
  const styles = {
    maxHeight: typed ? "100%" : "0px",
  };

  // TO PUSH THE NEW GROUP TO THE SERVER
  async function AddGroup(GroupInfo) {
    const response = await fetch(`${API_URL}/add-groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(GroupInfo),
    });
    const data = await response.json();

    if (data.Access) {
      localStorage.setItem("Token", data.Token);

      // REASSIGNING NEW TOKEN
      const newToken = localStorage.getItem("Token");
      reEvaluateToken(newToken);
      const decodedObj = decodeToken(newToken);

      // ADDING THE NEWLY ADDED GROUPS TO THE GROUP LIST
      GroupsListFn(decodedObj).then((data) => {
        if (!data.Access) {
          return;
        }
        const GroupsName = data.GroupName.map((data) => data);
        setGrpsLst(GroupsName);
      });
      return history.push("/dashboard");
    }

    setIsGroupAdded(false);
    setErrorMsg(data.message);
  }

  return (
    <section className="NG_MainCntr">
      <article>
        <img
          src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
          alt="Logo"
        />

        <div>
          {/* TO ADD FORM DYNAMICALLY */}
          <Formik
            initialValues={{
              groupName: "",
              friendsList: ["Ragavendiran", ""],
            }}
            validationSchema={Schema}
            onSubmit={(GroupInfo) => {
              setIsGroupAdded(true);
              AddGroup(GroupInfo);
            }}
            render={({ values, errors, touched }) => (
              <Form>
                <p>START A NEW GROUP</p>
                <label className="NG_InputLabelMain" htmlFor="groupName">
                  <div>
                    <p>My group shall be called…</p>
                  </div>

                  <Field
                    name="groupName"
                    placeholder="Enter Your Group Name"
                    onClick={() => setErrorMsg("")}
                    onInput={() => setTyped(true)}
                  />
                </label>

                {errors.groupName && touched.groupName ? (
                  <div className="NG_GroupNameError">{errors.groupName}</div>
                ) : (
                  ""
                )}

                <div className="NF_ErrorMsg">
                  {errorMsg ? <p>{errorMsg}</p> : ""}
                </div>

                <FieldArray
                  name="friendsList"
                  render={(arrayHelpers) => (
                    <div style={styles} className="NG_HiddenInput">
                      <h1>GROUP MEMBERS</h1>

                      {values.friendsList.map((friendsList, index) => (
                        <div key={index}>
                          <label
                            className="NG_InputLabel"
                            htmlFor={`friendsList.${index}`}
                          >
                            <img
                              src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue8-50px.png"
                              alt="Profile"
                            />
                            {index === 0 ? (
                              <Field
                                name={`friendsList.${index}`}
                                placeholder="Enter Your Friends Name"
                                value={values.friendsList[0]}
                                onChange={() => {}}
                              />
                            ) : (
                              <Field
                                name={`friendsList.${index}`}
                                placeholder="Enter Your Friends Name"
                              />
                            )}

                            {values.friendsList.length > 1 && index !== 0 ? (
                              <p
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                x
                              </p>
                            ) : (
                              <p style={{ opacity: 0 }}>x</p>
                            )}
                          </label>

                          {errors.friendsList && touched.friendsList ? (
                            errors.friendsList[index] &&
                            touched.friendsList[index] ? (
                              <div className="NG_Error">
                                {errors.friendsList[index]}
                              </div>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      ))}

                      <p
                        onClick={() =>
                          arrayHelpers.insert(values.friendsList.length, "")
                        }
                        className="NG_AddPersons"
                      >
                        + Add a person
                      </p>
                    </div>
                  )}
                />
                <div className="NG_submit">
                  <button style={btnStyles} type="submit">
                    {isGroupAdded ? "ADDING....." : "ADD"}
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </article>
    </section>
  );
}
