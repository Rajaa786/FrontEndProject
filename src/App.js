import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Dashboard />
      <Profile />
    </div>
  );
}

export default App;
