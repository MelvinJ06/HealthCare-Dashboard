import "./Dashboard.css";
import BodyStatus from "../BodyStatus/BodyStatus";
import Schedule from "../Schedule/Schedule";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <BodyStatus />
        <Schedule />
      </div>
    </div>
  );
};

export default Dashboard;
