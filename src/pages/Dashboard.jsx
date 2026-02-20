import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import PatientTable from "../components/PatientTable";

function Dashboard({ user }) {
  return (
    <>
      <Navbar user={user} />
      <Upload />
      <PatientTable />
    </>
  );
}

export default Dashboard;