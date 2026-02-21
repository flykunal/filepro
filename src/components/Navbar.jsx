function Navbar({ user }) {
  return (
    <header className="dashboard-navbar">
      <h1 className="app-title">Patient Management System</h1>
      <p className="user-label">User: {user || "Guest"}</p>
    </header>
  );
}

export default Navbar;
