import { useState } from "react";
import { CreatePopUp, ButtonPopUp } from "../app/Styles";
const ButtonCreate = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <CreatePopUp showPopUp={showPopUp}>
        <form action="">
          <h2>¿Qué quieres crear?</h2>
          <input list="options" />
          <datalist id="options">
            <option value="Area" />
            <option value="Logro" />
            <option value="Mejora" />
            <option value="Idea" />
            <option value="Objetivo" />
          </datalist>
          <input type="text" />
        </form>
      </CreatePopUp>
      <ButtonPopUp onClick={() => setShowPopUp(true)}>+</ButtonPopUp>
    </>
  );
};

export default ButtonCreate;
