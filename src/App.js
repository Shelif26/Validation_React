import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

const App = () => {
  const [userlist, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserslist) => {
      return [
        ...prevUserslist,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userlist} />
    </div>
  );
};

export default App;
