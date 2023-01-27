import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/Profile";
import profileImage from "./Houaidi.jpeg";

function App() {
  function HandleName(fullname) {
    alert(`my name is ${fullname}`);
  }
  return (
    <div className="App">
      <Profile
        fullname="Houaidi Nawres"
        bio="web developper"
        profession="web developper"
        HandleName={HandleName}
      >
        <img
          src={profileImage}
          alt="image de Nawres"
          style={{ height: "200px", width: "100" }}
        />
      </Profile>
    </div>
  );
}

export default App;
