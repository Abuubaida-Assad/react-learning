import React from "react";

function UserTable({ users }) {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;