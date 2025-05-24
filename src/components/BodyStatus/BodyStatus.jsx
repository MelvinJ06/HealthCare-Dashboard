import React from "react";
import "./BodyStatus.css";
import humanImg from '../../assets/images/humanImg.jpg';
import { FaSearch, FaBell } from "react-icons/fa";


const BodyStatus = () => {
  return (
    <div className="body-status">
      <div className="search-container">
        <FaSearch className="icon search-icon" />
        <input type="text" placeholder="Search..." className="search-bar" />
        <FaBell className="icon bell-icon" />
      </div>
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="content">
        <div className="anatomy">
          <img src={humanImg} alt="Human Anatomy" />
        </div>

        <div className="status-cards">
          <div className="card red">
            <div className="card-header">
              <span className="emoji">🫁</span>
              <h4>Lungs</h4>
            </div>
            <p className="date">Date: 26 Oct 2021</p>
            <div className="progress">
              <div className="progress-bar red-bar" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="card green">
            <div className="card-header">
              <span className="emoji">🦷</span>
              <h4>Teeth</h4>
            </div>
            <p className="date">Date: 26 Oct 2021</p>
            <div className="progress">
              <div className="progress-bar green-bar" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="card orange">
            <div className="card-header">
              <span className="emoji">🦴</span>
              <h4>Bone</h4>
            </div>
            <p className="date">Date: 26 Oct 2021</p>
            <div className="progress">
              <div className="progress-bar orange-bar" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

      </div>
      <div className="activity-chart">
        <div className="activity-header">
          <h4>Activity</h4>
          <span>3 appointments on this week</span>
        </div>
        <div className="activity-bars">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div className="day" key={i}>
              <div className="bar-group">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
              </div>
              <span>{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyStatus;
