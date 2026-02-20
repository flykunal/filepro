function Navbar({ user }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#222", color: "white" }}>
      <h3>Patient Management System</h3>
      <div>
        👤 {user}
      </div>
    </div>
  );
}

export default Navbar;