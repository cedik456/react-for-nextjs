import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  // const users = ["Pedro", "Camila", "John", "Saul"];
  // const isMarried = false;
  // const isLoading = true;
  // const data = "example@email.com";

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {/* <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul> */}

      {/* {isMarried ? <p>The user is married</p> : <p>The user is not married</p>} */}
      {/* If statement is just double && while the if else is the ternary operator ? : */}
      {/* 
      {isLoading ? <p>Loading...</p> : <p>User email is: {data}</p>} */}

      <Dropdown />
    </div>
  );
}

export default App;
