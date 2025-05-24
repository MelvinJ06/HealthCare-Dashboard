import "../style/Dashboard.css";
import "../style/Sidebar.css";
import Sidebar from "../components/Schedule/Schedule.jsx";
import Dashboard from "../components/Dashboard/Dashboard.jsx";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
