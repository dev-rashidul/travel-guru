import React from "react";

const UserTable = ({user}) => {
  return (
    <>
      <tr>
        <td>{user?.name}</td>
        <td>{user.email}</td>
      </tr>
    </>
  );
};

export default UserTable;
