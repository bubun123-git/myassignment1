import React, { useEffect, useState } from "react";
import "../Components/Employee.css";

function Employee({ submittedDataList, onEdit }) {
    const [editIndex, setEditIndex] = useState(null);

    const handleEditClick = (index) => {
        setEditIndex(index);
        // Pass the index of the user being edited to the parent component
        onEdit(index);
      };
    
  useEffect(() => {
    localStorage.setItem(
      "submittedDataList",
      JSON.stringify(submittedDataList)
    );
  }, [submittedDataList]);
  return (
    <div className="submitted-data-container">
      <h2 style={{ color: "black" }}>Submitted Data</h2>
      <table className="submitted-data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>Image</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {submittedDataList.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.designation}</td>
              <td>{data.gender}</td>
              <td>
                {Object.keys(data.courses)
                  .filter((key) => data.courses[key])
                  .join(", ")}
              </td>
              <td>
                {data.image && (
                  <img
                    src={URL.createObjectURL(data.image)}
                    alt={`Submitted image ${index}`}
                    className="submitted-image"
                  />
                )}
              </td>
              <td>
                <button onClick={() => handleEditClick(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
