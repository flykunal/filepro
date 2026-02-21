import { useEffect, useState } from "react";

function PatientTable() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:8080/patients");

      if (!res.ok) {
        throw new Error(`Failed to fetch patients (status: ${res.status})`);
      }

      const data = await res.json();
      setPatients(Array.isArray(data) ? data : []);
    } catch (err) {
      setPatients([]);
      setError(err?.message || "Network error while fetching patients.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      <h3>Patient List</h3>
      {loading && <p>Loading...</p>}
      {!loading && error && (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      )}

      {!loading && !error && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.gender}</td>
                <td>{p.age}</td>
                <td>{p.phone}</td>
                <td>{p.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PatientTable;
