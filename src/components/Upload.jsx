import { useState } from "react";

function Upload({ fetchPatients }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    if (!file.name.endsWith(".xlsx")) {
      setMessage("Only .xlsx files are allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setMessage("Uploading...");

      const response = await fetch("http://localhost:8080/patients/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("File uploaded successfully.");

        if (fetchPatients) {
          fetchPatients();
        }
      } else {
        setMessage(`Upload failed (status: ${response.status}).`);
      }
    } catch {
      setMessage("Network/server error during upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h3>Upload Patient Excel File</h3>

      <input
        type="file"
        accept=".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={handleUpload}
      />

      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        {loading ? "Processing..." : message}
      </p>
    </div>
  );
}

export default Upload;
