import { db } from "./utils/firebase/firebase.utils";
import { setDoc, getDoc } from "firebase/firestore";
import FormInput from "./components/form-input/form-input.component";
import Button from "./components/button/button.component";
const Crud = () => {
  return (
    <form>
      <FormInput type='text' />

      <Button>submit</Button>
    </form>
  );
};

export default Crud;
