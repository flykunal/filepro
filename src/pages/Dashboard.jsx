import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import PatientTable from "../components/PatientTable";

function Dashboard({ user }) {
  return (
    <div className="dashboard-page">
      <Navbar user={user} />

      <main className="dashboard-main">
        <section className="dashboard-card">
          <h2 className="section-title">Upload Records</h2>
          <Upload />
        </section>

        <section className="dashboard-card">
          <h2 className="section-title">Patient Records</h2>
          <PatientTable />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
