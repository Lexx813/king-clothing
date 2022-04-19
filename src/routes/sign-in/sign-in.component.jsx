import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default SignIn;
