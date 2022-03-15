import { Redirect, Route } from "react-router-dom";

export const ProtectedRoutes = (props) => {
  if (!props.isLogged) {
    if (props.isLogged === false) {
      return <Redirect to="login" />;
    }

    return (
      <img
        src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
        alt="Loading"
        className="PR_LoadingImg"
      />
    );
  }

  return <Route {...props} />;
};
