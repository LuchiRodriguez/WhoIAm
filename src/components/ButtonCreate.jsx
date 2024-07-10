import { useState } from "react";
import { CreatePopUp, ButtonPopUp } from "../app/Styles";
const ButtonCreate = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <CreatePopUp showPopUp={showPopUp}>
        <form action="">
          <h2>¿Qué quieres crear?</h2>
        </form>
      </CreatePopUp>
      <ButtonPopUp onClick={() => setShowPopUp(true)}>+</ButtonPopUp>
    </>
  );
};

export default ButtonCreate;
