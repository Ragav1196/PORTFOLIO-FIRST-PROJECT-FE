import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./SignUp.css";
import { API_URL } from "../../Global Constants/GlobalConstants";

export function SignUp() {
  // TO ADD TWO MORE INPUT FIELDS WHEN THE MAIN FIELD IS TYPED
  const [typed, setTyped] = useState(false);

  // TO HIDE OR SHOW THE TWO MORE INPUT FIELDS
  const styles = {
    maxHeight: typed ? "250px" : "0px",
  };

  // TO PUSH THE NEW USER TO THE SERVER STORAGE:
  async function RegisterUser(userInfo) {
    const response = await fetch(`${API_URL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
  }

  const formValidationSchema = yup.object({
    name: yup.string().required("Please give your name"),
    email: yup
      .string()
      .required("Please give your E-mail")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "E-mail pattern doesn't match"
      ),
    password: yup
      .string()
      .required("Please provide password")
      .min(8, "Password must be longer")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g,
        "Password pattern doesn't match"
      ),
  });

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (userInfo) => {
        RegisterUser(userInfo);
      },
    });

  return (
    <section className="SU_MainCntr">
      <article>
        <img
          src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
          alt="Logo"
        />

        <div>
          <form onSubmit={handleSubmit}>
            <p>INTRODUCE YOURSELF</p>
            <label className="SU_InputLabel" htmlFor="name">
              <div>
                Hi there! <span className="SU_IL_Bold">My name</span> is
              </div>
              <input
                onChange={handleChange}
                onInput={(e) => setTyped(true)}
                onBlur={handleBlur}
                name="name"
                value={values.name}
                type="text"
                id="name"
              />
              {errors.name && touched.name ? (
                <div className="SU_Error">{errors.name}</div>
              ) : (
                ""
              )}
            </label>
            <div style={styles} className="SU_HiddenInput">
              <label className="SU_InputLabel" htmlFor="email">
                <div>
                  Hers's my <span className="SU_IL_Bold">E-mail address</span>
                </div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                />
                {errors.email && touched.email ? (
                  <div className="SU_Error">{errors.email}</div>
                ) : (
                  ""
                )}
              </label>
              <label className="SU_InputLabel" htmlFor="password">
                <div>
                  Here's my <span className="SU_IL_Bold">password</span>
                </div>
                <input
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  id="password"
                />
                {errors.password && touched.password ? (
                  <div className="SU_Error">{errors.password}</div>
                ) : (
                  ""
                )}
              </label>
            </div>

            <div>
              <button type="submit">Sign me up!</button>
              <p>or</p>
              <button>Sign up with Google</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
