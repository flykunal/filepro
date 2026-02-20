import { useEffect, useState } from "react";

function PatientTable() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    const res = await fetch("http://localhost:8080/patients");
    const data = await res.json();
    setPatients(data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      <h3>Patient List</h3>
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
    </div>
  );
}

export default PatientTable;