import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


const users = [
  { name: "nihar", age: 12 },
  { name: "nihar", age: 12 },
  { name: "nihar", age: 12 },
  { name: "nihar", age: 12 },
]

function App() {
  const [userList, setUserList] = useState([]);

  const addUserListHandler = (props) => {
    const { name, age } = props;
    let user = props;
    user = {
      name: props.username, age, age, id: Math.random()
    }
    setUserList((prevList) => { return [...prevList, user] })
    console.log('yoo', props, userList, user);
  }

  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
