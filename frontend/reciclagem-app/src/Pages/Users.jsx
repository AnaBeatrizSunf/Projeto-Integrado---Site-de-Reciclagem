import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      {/* Lado verde com mensagem e botão Exit no rodapé */}
      <div className="admin-left">
        <div>
          <h2>Hello, administrator!</h2>
          <p>User query screen.</p>
        </div>
        <button className="btn-exit" onClick={() => navigate("/admin")}>
          Exit
        </button>
      </div>

      {/* Lado branco com card marrom */}
      <div className="admin-right">
        <div className="admin-card">
          <h1>USERS</h1>

          <div className="search-bar">
            <input type="text" placeholder="Search by email" />
          </div>

          <table className="admin-table">
            <thead>
              <tr>
                <th>id</th>
                <th>email</th>
                <th>date created</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {/* tabela inicialmente em branco */}
              <tr>
                <td>1</td>
                <td>davi@gmail.com</td>
                <td>00/00/0000</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <footer className="admin-footer">
            Projeto acadêmico SENACSP
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Users;
