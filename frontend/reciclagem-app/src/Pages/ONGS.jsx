import { useNavigate } from "react-router-dom";

function Ongs() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">

      <div className="admin-left">
        <div>
          <h2>Hello, administrator!</h2>
          <p>Administrator query screen.</p>
        </div>
        <button className="btn-exit" onClick={() => navigate("/admin")}>
          Exit
        </button>
      </div>

      <div className="admin-right">
        <div className="admin-card">
          <h1>ONGS</h1>

          <div className="search-bar">
            <input type="text" placeholder="Search by name" />
          </div>

          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>ONG banana</td>
                <td>
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Del</button>
                </td>
              </tr>
            </tbody>
          </table>

          <button className="btn-edit">Insert partners ONG’s</button>

          <footer className="admin-footer">
             Projeto acadêmico SENACSP
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Ongs;
