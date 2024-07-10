import { HomePage } from "../app/Styles";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <HomePage>
      <NavBar />
      <h2>¿Qué puedo hacer hoy para ser mejor que ayer?</h2>
      <section>
        <div>
          <h3>Hoy es el día en que:</h3>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <h3>Recuerda que te comprometiste a:</h3>
          <textarea name="" id=""></textarea>
        </div>
      </section>
    </HomePage>
  );
};

export default Home;
