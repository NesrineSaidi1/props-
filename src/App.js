import "./App.css";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  function message(name) {
    alert(name);
  }

  const fullName = "Nesrine Saidi";
  const bio = "Tunisian young web developper trying to find her path";
  const profession = "Web developper";
  return (
    <div>
      <Profile
        fullName={fullName}
        Bio={bio}
        profession={profession}
        message={message}
      >
        <img src="me.jpg" alt="gvghvgghvgyccgctyvyhgvvty" />
      </Profile>
    </div>
  );
}

export default App;
