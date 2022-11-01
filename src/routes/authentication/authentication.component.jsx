import { Fragment } from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <Fragment>
      {user ? (
        <Navigate to='/' replace={true} />
      ) : (
        <AuthenticationContainer>
          <SignInForm />
          <SignUpForm />
        </AuthenticationContainer>
      )}
    </Fragment>
  );
};

export default Authentication;
