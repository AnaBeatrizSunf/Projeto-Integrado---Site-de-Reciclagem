import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="left">
        <div className="content">
          <h1>SEJA BEM VINDO!</h1>
          <p>
            Reciclar nunca foi tão fácil. Acesse guias de descarte,
            dicas de sustentabilidade e uma rede de ONGs em um só lugar.
            Junte-se ao movimento e mude a forma como você lida com seus resíduos.
          </p>
        </div>
      </div>

      <div className="right">
        <div className="content">
          <h2>LOGIN</h2>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />

          <button onClick={() => navigate("/home")}>
            Entrar
          </button>

          <p>
            Não possui conta? <a href="#Cadastro">Cadastre-se aqui</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;