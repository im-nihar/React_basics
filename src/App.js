
import UsersContext from './store/users-context';
import UserFinder from './components/UserFinder';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;



// import UserFinder from "./components/UserFinder";
// // import Users from "./components/Users";

// function App() {
//   return (
//     <div>
//       {/* <Users /> */}
//       <UserFinder />
//     </div>
//   );
// }

// export default App;
