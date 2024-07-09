import { HomePage } from "../app/Styles";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <HomePage>
      <NavBar />
      <h1>¿Qué puedo hacer hoy para ser mejor que ayer?</h1>
      <section>
        <div>
          <h3>Hoy es el día en que:</h3>
        </div>
        <div>
          <h3>Recuerda que te comprometiste a:</h3>
        </div>
      </section>
    </HomePage>
  );
};

export default Home;
