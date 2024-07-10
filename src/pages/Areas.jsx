import { useState } from "react";
import NavBar from "../components/NavBar";
import ButtonCreate from "../components/ButtonCreate";
import { AreasPage } from "../app/Styles";
const Areas = () => {
  const [areas, setAreas] = useState(null);
  return (
    <>
      <NavBar />
      <AreasPage>
        {!areas ? (
          <>
            <h1>Aún no tienes áreas creadas</h1>
            <ButtonCreate />
          </>
        ) : (
          <h3>Estas son las áreas de tu vida</h3>
        )}
      </AreasPage>
    </>
  );
};

export default Areas;
