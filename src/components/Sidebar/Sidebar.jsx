import "./Sidebar.css";
import { FiSettings } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { BsCalendar4 } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdOutlineQueryStats } from "react-icons/md";
import { BsChatLeftDots } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Health<span>care.</span></h2>
      <h3>General</h3>
      <ul>
        <li className="active"><BiGridAlt /> Dashboard</li>
        <li><AiOutlineHistory /> History</li>
        <li><BsCalendar4 /> Calendar</li>
        <li><AiOutlinePlusSquare /> Appointments</li>
        <li><MdOutlineQueryStats /> Statistics</li>
      </ul>
      <h3>Tools</h3>
      <ul>
        <li><BsChatLeftDots /> Chat</li>
        <li><BsTelephone /> Support</li>
      </ul>
      <div className="settings">
        <FiSettings className="settings-icon" />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
