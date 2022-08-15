import React from "react";
import "../Stylesheets/dashboard.css";
import Card from "../Components/Card";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import AnalyticsIcon from "@mui/icons-material/Analytics";

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div className="dashboardHeader">
        <h2 className="pageTitle">Dashboard</h2>
        <div className="search_notify">
          <div className="searchBar">
            <SearchRoundedIcon
              fontSize="medium"
              sx={{
                color: "hsl(0, 0%, 60%)",
              }}
            />
            <input id="search" type="search" placeholder="Search" />
          </div>
          <div className="notification">
            <i className="fa-regular fa-bell"></i>
          </div>
        </div>
      </div>

      <section className="coursesContainer">
        <h5
          style={{
            marginBottom: "0.9rem",
          }}
        >
          New Courses
        </h5>
        <div className="courses">
          <Card
            lessons={12}
            subject="Geography"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWobw9zkm4yu3hv0Q9xvsEkjF4-G0k1Qhbg&usqp=CAU"
          />
          <Card
            lessons={15}
            subject="JavaScript Course"
            src="https://techvccloud.mediacdn.vn/zoom/600_315/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png"
          />
          <Card lessons={8} subject="Photography Course" src="" />
        </div>
      </section>

      <section className="myCoursesContainer">
        <h5
          style={{
            marginBottom: "0.9rem",
          }}
        >
          My Courses
        </h5>
        <div className="myTotalCourses">
          <div className="courseDetailsHeader">
            <div className="width1">Course name</div>
            <div className="width2">Start</div>
            <div className="width2">Rate</div>
            <div className="width2">Level</div>
          </div>
          <div className="myCourses">
            <div className="course width1">
              <div className="courseThumbnail course1">
                <KeyboardCommandKeyIcon />
              </div>
              <div className="courseInfo">
                <span>Web Design</span>
                <span>10 lessons</span>
              </div>
            </div>
            <div className="width2">Aug 12 </div>
            <div className="width2">4.8</div>
            <div className="width2">Elementary</div>
          </div>
          <div className="myCourses">
            <div className="course width1">
              <div className="courseThumbnail course2">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="courseInfo">
                <span>Development Basics</span>
                <span>8 lessons</span>
              </div>
            </div>
            <div className="width2">May 14</div>
            <div className="width2">4.4</div>
            <div className="width2">Intermediate</div>
          </div>
          <div className="myCourses">
            <div className="course width1">
              <div className="courseThumbnail course3">
                <AnalyticsIcon />
              </div>
              <div className="courseInfo">
                <span>Data with Python</span>
                <span>5 lessons</span>
              </div>
            </div>
            <div className="width2">May 17</div>
            <div className="width2">4.6</div>
            <div className="width2">Intermediate</div>
          </div>
          <div className="myCourses">
            <div className="course width1">
              <div className="courseThumbnail course4">
                <HtmlIcon fontSize="large" />
              </div>
              <div className="courseInfo">
                <span>Html Basics</span>
                <span>12 lessons</span>
              </div>
            </div>
            <div className="width2">May 26</div>
            <div className="width2">4.7</div>
            <div className="width2">Elementary</div>
          </div>
          <div className="myCourses">
            <div className="course width1">
              <div className="courseThumbnail course5">
                <JavascriptIcon fontSize="large" />
              </div>
              <div className="courseInfo">
                <span>JavaScript</span>
                <span>8 lessons</span>
              </div>
            </div>
            <div className="width2">May 30</div>
            <div className="width2">4.9</div>
            <div className="width2">Elementary</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
