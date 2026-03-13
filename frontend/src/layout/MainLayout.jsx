import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>

      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          borderBottom: "1px solid #ddd"
        }}
      >
        <Link to="/">Dashboard</Link>
        <Link to="/journals">Journals</Link>
        <Link to="/insights">Insights</Link>
      </nav>

      <div style={{ maxWidth: "800px", margin: "30px auto" }}>
        <Outlet />
      </div>

    </div>
  );
}