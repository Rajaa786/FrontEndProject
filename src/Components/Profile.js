import React, { useState } from "react";
import "../Stylesheets/profile.css";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CircularProgressBar from "../Components/CircularProgressBar";

function Profile() {
  const [date, setDate] = useState(new Date());

  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="profileContainer">
      <div className="profileHeader">
        <h4>Profile</h4>
        <div className="editIcon">
          <BorderColorRoundedIcon />
        </div>
      </div>

      <div className="profileInfo">
        <div className="profileImage"></div>
        <div className="userName">
          Emily Howard
          <span>
            <CheckCircleRoundedIcon
              fontSize="small"
              sx={{
                verticalAlign: "sub",
                marginLeft: "0.2rem",
              }}
            />
          </span>
        </div>
        <div className="userLevel">Elementary</div>
      </div>

      {/* Calendar */}
      <div className="calendarSection">
        <Calendar className="calendar" onChange={onDateChange} value={date} />
      </div>

      <section className="homeworkProgress">
        <h5>Homework progress</h5>
        <div className="allCoursesProgress">
          <div className="progressMeters">
            <div className="homeworkInfo">
              <CircularProgressBar progressPercent={50} />
              <div className="details">
                <span>Styling with CSS</span>
                <span>12 tasks</span>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="progressMeters">
            <div className="homeworkInfo">
              <CircularProgressBar progressPercent={65} />
              <div className="details">
                <span>Basics of programming</span>
                <span>18 tasks</span>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="progressMeters">
            <div className="homeworkInfo">
              <CircularProgressBar progressPercent={25} />
              <div className="details">
                <span>Learn to Program in Java</span>
                <span>10 tasks</span>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
