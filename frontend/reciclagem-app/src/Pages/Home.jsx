import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <nav className="navbar">
        <h1>Reciclagem Sustentável</h1>

        <ul className="nav-list">
          <li>Sobre</li>
          <li>Tipos</li>
          <li>Benefícios</li>
          <li>Dicas</li>
          <li>ONG</li>
          <li>Contato</li>
          <li onClick={() => navigate("/admin")}>Admin</li>
        </ul>

      </nav>

      <main className="home-content">
        <div className="card">
          <h2>Transforme o mundo com pequenas atitudes</h2>
          <p>Cada reciclagem faz a diferença</p>
        </div>
      </main>

      <footer className="footer">
        Projeto acadêmico SENACSP
      </footer>

    </div>
  );
}

export default Home;