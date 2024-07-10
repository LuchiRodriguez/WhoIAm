import NavBar from "../components/NavBar";
import { ProfilePage } from "../app/Styles";
import userImg from "../app/img/userImg.jpg";
import Resultados from "../app/img/resultados.png";
const Profile = () => {
  return (
    <>
      <NavBar />
      <ProfilePage>
        <div>
          <img src={userImg} alt="" />
          <h2>@LuchiRodriguez_</h2>
        </div>
        <section>
          <div>
            <img src={Resultados} alt="" />
            <p>Resultados</p>
          </div>
        </section>
      </ProfilePage>
    </>
  );
};

export default Profile;
