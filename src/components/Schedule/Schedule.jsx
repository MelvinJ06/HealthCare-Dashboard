import React from "react";
import "./Schedule.css";
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Schedule = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  const timeSlots = {
    Mon: ["10:00", "11:00", "12:00"],
    Tue: ["08:00", "09:00", "10:00"],
    Wed: ["12:00", "-", "13:00"],
    Thu: ["10:00", "11:00", "-"],
    Fri: ["-", "14:00", "16:00"],
    Sat: ["12:00", "14:00", "15:00"],
    Sun: ["09:00", "10:00", "11:00"]
  };

  return (
    <div className="schedule">
      <div className="schedule-header">
        <h4>October 2021</h4>
        <div className="schedule-controls">
          <div className="avatar">🧑‍⚕️</div>
          <button className="plus-btn"><FaPlus /></button>
        </div>
      </div>

      <div className="calendar-nav">
        <FaChevronLeft className="arrow" />
        <FaChevronRight className="arrow" />
      </div>

      <div className="calendar">
        {days.map((day, i) => (
          <div className={`day ${i === 1 ? "active-day" : ""}`} key={day}>
            <p>{day}</p>
            <p>{dates[i]}</p>
            <div className="time-slots">
              {timeSlots[day].map((time, j) => (
                <div key={j} className={`slot ${i === 1 && j === 1 ? "highlight" : ""}`}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="box purple">
          <h5>Dentist 🦷</h5>
          <small>09:00 - 11:00</small>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="box lightpurple">
          <h5>Physiotherapy Appointment 💪</h5>
          <small>11:00 - 12:00</small>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>

      <h5 className="upcoming-title">The Upcoming Schedule</h5>
      <div className="upcoming-group">
        <p className="upcoming-day">On Thursday</p>
        <div className="upcoming-tags">
          <div className="tag">Health checkup complete 🧪<br /><small>11:00 AM</small></div>
          <div className="tag">Ophthalmologist 👁️<br /><small>14:00 PM</small></div>
        </div>
        <p className="upcoming-day">On Saturday</p>
        <div className="upcoming-tags">
          <div className="tag">Cardiologist ❤️<br /><small>12:00 AM</small></div>
          <div className="tag">Neurologist 🧠<br /><small>16:00 PM</small></div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
