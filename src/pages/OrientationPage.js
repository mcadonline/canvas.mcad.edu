import React from "react";
import DefaultLayout from "./DefaultLayout";
import Tip from "../components/Tip";
import Video from "../components/Video";
import turtleImg from "../img/dragon-turtle-amitchell.png";
import "./OrientationPage.scss";

export default () => (
  <DefaultLayout className="orientation-student-page">
    <header className="page-header">
      <h1 className="container">
        Canvas LMS <span className="subtitle">Student Orientation</span>
      </h1>
      <img
        className="hero-image"
        src={turtleImg}
        alt="Dragon Turtle by Alex Mitchell"
      />
    </header>
    <section className="section-intro">
      <div className="container">
        <p>Welcome.</p>
        <p>This semester, some things are different. Some things are better.</p>
        <p>
          Your course will be using a new Learning Management System, Canvas
          LMS.
        </p>
        <p>
          It's similar to Blackboard, but many think it's more user friendly.
        </p>
        <p>Here are some resources to help you get started.</p>
      </div>
    </section>
    <section className="page-section">
      <div className="container">
        <h2>An Overview of Canvas</h2>
        <Video
          title="Canvas Overview"
          src="https://player.vimeo.com/video/74677642?title=0&byline=0&portrait=0"
        />
        <Tip>
          Do you prefer watching videos on 1.25x or 2x speed? If you use Chrome,
          you may want to download the{" "}
          <a href="https://chrome.google.com/webstore/detail/vimeo-repeat-speed/noonakfaafcdaagngpjehilgegefdima">
            Vimeo Repeat &amp; Speed Extension
          </a>{" "}
          to make your Vimeo video experience better!
        </Tip>
      </div>
    </section>

    <section>
      <h2 id="canvas-settings">Your Canvas Settings</h2>
      <Video
        title="User Settings and Profile Pictures"
        src="https://player.vimeo.com/video/74243735?title=0&byline=0&portrait=0"
      />
      <Video
        title="Update Notification Preferences"
        src="https://player.vimeo.com/video/75514816?title=0&byline=0&portrait=0"
      />
      <Video
        title="Managing your User Files in Canvas"
        src="https://player.vimeo.com/video/74772644?title=0&byline=0&portrait=0"
      />
    </section>

    <section>
      <h2 id="common-tools">Useful Canvas Tools</h2>
      <Video
        title="Communicating with Your Instructor and Peers"
        src="https://player.vimeo.com/video/74771648?title=0&byline=0&portrait=0"
      />
      <Video
        title="Checking Grades"
        src="https://player.vimeo.com/video/74966156?title=0&byline=0&portrait=0"
      />
      <Video
        title="Using the Canvas Calendar"
        src="https://player.vimeo.com/video/78015141?title=0&byline=0&portrait=0"
      />
      <Video
        title="Discussions"
        src="https://player.vimeo.com/video/75056432?title=0&byline=0&portrait=0"
      />
      <Video
        title="Taking Quizzes and Surveys"
        src="https://player.vimeo.com/video/75056435?title=0&byline=0&portrait=0"
      />
    </section>

    <section>
      <h2 id="canvas-app">The Canvas App for iPhone and Android</h2>
      <Video
        title="The Canvas Student App"
        src="https://player.vimeo.com/video/76565011?title=0&byline=0&portrait=0"
      >
        <p>
          Download the app for{" "}
          <a
            href="https://itunes.apple.com/us/app/canvas-student/id480883488?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            iPhone
          </a>{" "}
          or{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.instructure.candroid&hl=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            Android
          </a>
        </p>
      </Video>
    </section>

    <section>
      <h2 id="tips-for-ol-students">Tips for Students in Online Courses</h2>
      <p>Getting ready for Online Learning:</p>
      <ul>
        <li>
          <a
            href="http://intranet.mcad.edu/kb/what-online-learning-mcad"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is Online Learning at MCAD Like?
          </a>
        </li>
        <li>
          <a
            href="http://intranet.mcad.edu/kb/how-do-i-buy-books-or-supplies-my-online-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            How do I buy books or supplies for my class?
          </a>
        </li>
        <li>
          <a
            href="http://intranet.mcad.edu/kb/so-how-does-work-will-you-contact-me-my-course-starts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Will you contact me when my course starts?
          </a>
        </li>
        <li>
          <a
            href="http://intranet.mcad.edu/kb/how-heavy-workload-what-work"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is the workload in an online class?
          </a>
        </li>
      </ul>
      <p>Working in your Online Classroom:</p>
      <ul>
        <li>
          <a
            href="http://intranet.mcad.edu/kb/how-do-i-login-blackboard-whats-my-password"
            target="_blank"
            rel="noopener noreferrer"
          >
            Where do I go? How do I login? What's my password?
          </a>
        </li>
        <li>
          <a
            href="http://intranet.mcad.edu/kb/what-do-i-do-first-day-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            What do I do on the first day of class?
          </a>
        </li>
        <li>
          <a
            href="http://intranet.mcad.edu/kb/what-orientation-assignment"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is the Orientation Assignment?
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="more-resources">More Resources</h2>
      <ul>
        <li>
          <a
            href="https://community.canvaslms.com/community/answers/guides/video-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Canvas Guide
          </a>
        </li>
        <li>
          <a href="https://kb.mcad.edu">MCAD Knowledge Base</a>
        </li>
        <li>
          <a href="https://intranet.mcad.edu">MCAD Intranet</a>
        </li>
        <li>
          <a href="https://mcad.edu/about-mcad/academic-calendar">
            MCAD Academic Calendar
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="contact">Contact Online Learning</h2>
      <p>
        Please contact us if you have any questions. We're always happy to help!
      </p>
      <dl>
        <dt>Email</dt>
        <dd>
          <a href="mailto:online@mcad.edu">online@mcad.edu</a>
        </dd>

        <dt>Phone</dt>
        <dd>
          <a href="tel:6128743618">(612) 874-3618</a>
        </dd>

        <dt>Mail</dt>
        <dd>
          Minneapolis College of Art and Design
          <br /> Online Learning Department
          <br /> 2501 Stevens Ave.
          <br /> Minneapolis, MN 55404
        </dd>
      </dl>
    </section>
  </DefaultLayout>
);
