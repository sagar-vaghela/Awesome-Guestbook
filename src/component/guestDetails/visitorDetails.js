import React from "react";

const VisitorDetailsTable = () => {
  const guestData = JSON.parse(localStorage.getItem("formData")) || [];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {guestData &&
            guestData?.map((guest, index) => (
              <tr key={index}>
                <td>{guest.firstName}</td>
                <td>{guest.email}</td>
                <td>{guest.department}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default VisitorDetailsTable;
