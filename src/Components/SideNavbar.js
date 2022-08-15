import React from "react";
import "../Stylesheets/sidenav.css";
import boyImage from "../Images/working_boy.png";
import { useEffect, useState } from "react";

function SideNavbar() {
  const [clickedNavElement, setClickedNavElement] = useState("dashboard");
  let nav, activeNavElement;
  useEffect(() => {
    nav = document.querySelector(".nav");
    activeNavElement = document.querySelector(".navElements.active");
  }, [clickedNavElement]);

  const clickListener = (event) => {
    let tmp = event.target.parentElement.id || event.target.id;
    setClickedNavElement(tmp);
    let clickedElement = document.getElementById(tmp);
    clickedElement.classList.add("active");
    activeNavElement?.classList.remove("active");
  };

  return (
    <div className="navContainer">
      <div className="nav" onClick={clickListener}>
        <div className="logo"></div>
        <div id="dashboard" className="navElements active">
          <i className="fa-solid fa-table-columns"></i>
          <div>Dashboard</div>
        </div>

        <div id="courses" className="navElements">
          <i className="fa-solid fa-book"></i>
          <div>Courses</div>
        </div>

        <div id="chats" className="navElements">
          <i className="fa-solid fa-comment"></i>
          <div>Chats</div>
        </div>

        <div id="grades" className="navElements">
          <i className="fa-solid fa-square-poll-vertical"></i>
          <div>Grades</div>
        </div>

        <div id="schedule" className="navElements">
          <i className="fa-solid fa-calendar-minus"></i>
          <div>Schedule</div>
        </div>

        <div id="settings" className="navElements">
          <i className="fa-solid fa-gear"></i>
          <div>Settings</div>
        </div>
      </div>
      <div className="premiumSubscription">
        <img id="image" src={boyImage} alt="" />
        <div className="premiumInfo">
          <h6>Premium Subscription</h6>
          <p>Buy Premium and get access to new courses</p>
        </div>
        <button className="viewMoreDetails">More Detailed</button>
      </div>
    </div>
  );
}

export default SideNavbar;
