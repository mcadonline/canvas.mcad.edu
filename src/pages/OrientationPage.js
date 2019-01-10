import React from "react";
import DefaultLayout from "./DefaultLayout";
import Tip from "../components/Tip";
import Video from "../components/Video";
import turtleImg from "../img/dragon-turtle-amitchell.png";
import Accordion from "../components/Accordion";

import "./OrientationPage.scss";

export default () => (
  <DefaultLayout className="orientation-student-page">
    <header className="page-title">
      <h1 className="container">
        Canvas LMS <span className="subtitle">Student Orientation</span>
      </h1>
    </header>
    <section className="section-interlude">
      <img src={turtleImg} alt="Dragon Turtle by Alex Mitchell" />
      <p className="image-by">Illustration by Alex Mitchell, MFA '15</p>
    </section>
    <section className="section-intro">
      <div className="container">
        <h2>Welcome.</h2>
        <p>This semester some things are different. Some things are better.</p>

        <p>
          Your course will be using a new Learning Management System, Canvas
          LMS. It's similar to Blackboard, but many think it's more user
          friendly.
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

    <section className="page-section">
      <div className="container">
        <h2>Useful Canvas Tools</h2>

        <Accordion title="User Settings and Profile Pictures">
          <Video
            title="User Settings and Profile Pictures"
            src="https://player.vimeo.com/video/74243735?title=0&byline=0&portrait=0"
          />
        </Accordion>
        <Accordion title="Update Notification Preferences">
          <Video
            title="Update Notification Preferences"
            src="https://player.vimeo.com/video/75514816?title=0&byline=0&portrait=0"
          />
        </Accordion>
        <Accordion title="Communicating with Your Instructor and Peers">
          <Video
            title="Communicating with Your Instructor and Peers"
            src="https://player.vimeo.com/video/74771648?title=0&byline=0&portrait=0"
          />
        </Accordion>
        <Accordion title="Checking Grades">
          <Video
            title="Checking Grades"
            src="https://player.vimeo.com/video/74966156?title=0&byline=0&portrait=0"
          />
        </Accordion>
        <Accordion title="Using the Canvas Calendar">
          <Video
            title="Using the Canvas Calendar"
            src="https://player.vimeo.com/video/78015141?title=0&byline=0&portrait=0"
          />
        </Accordion>
        <Accordion title="The Canvas Student App">
          <Video
            title="The Canvas Student App"
            src="https://player.vimeo.com/video/76565011?title=0&byline=0&portrait=0"
          />
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
        </Accordion>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <h2 id="tips-for-ol-students">Frequently Asked Questions</h2>

        <Accordion title="What is this about? Why are we using Canvas LMS?">
          <p>
            Since 2001, MCAD has used Blackboard as our Learning Management
            System (LMS). Blackboard has been pretty good for MCAD, but it's not
            perfect. Faculty and students have asked:{" "}
            <em>Is there something better?</em>
          </p>

          <p>
            Canvas is popular LMS with a reputation for being user friendly. In
            the last few years many highed ed institutions have adopted Canvas
            as their LMS.
          </p>

          <p>
            This semester MCAD is piloting Canvas with a small cohort of faculty
            and students – including you! We want to know what you think. Later
            in the semester we will survey you and your instructor about your
            experiences. Your feedback will help decide what LMS MCAD uses in
            the future.
          </p>
        </Accordion>

        <Accordion title="Will all of my courses use Canvas LMS this semester?">
          <p>
            No. If you're enrolled in multiple courses, you will be using{" "}
            <a href="https://learn.mcad.edu">Blackboard</a> for your other
            courses.
          </p>
          <p>The courses that are participating in the Canvas LMS pilot are:</p>
          <table>
            <tr>
              <th>Course</th>
              <th>Faculty</th>
            </tr>
            <tr>
              <td>Applied Arts and Designed Objects</td>
              <td>G. Gasterland-Gustafsson</td>
            </tr>
            <tr>
              <td>Creative Leadership</td>
              <td>A. Nowak</td>
            </tr>

            <tr>
              <td>Illustrating Ideas</td>
              <td>A. Mitchell</td>
            </tr>
            <tr>
              <td>Intro to Illustration</td>
              <td>J. Anderson</td>
            </tr>
            <tr>
              <td>Liberal Arts Advanced Seminar</td>
              <td>D. Pankonien</td>
            </tr>
            <tr>
              <td>Senior Project: Graphic Design</td>
              <td>J. Jancourt</td>
            </tr>
            <tr>
              <td>User Experience Design</td>
              <td>M. Luken</td>
            </tr>
          </table>
        </Accordion>

        <Accordion title="Where do I go to login to Canvas?">
          <p>
            Canvas LMS is the website where you will be learning online. Go to:{" "}
            <a href="https://canvas.mcad.edu">https://canvas.mcad.edu</a> to
            login.
          </p>
        </Accordion>
        <Accordion title="What's my username?">
          <p>
            If you're enrolled in an online course, you should have received an
            email with your username and your student ID number one week before
            the course began.
          </p>
          <p>
            Your username is usually the first initial + last name. For example:
          </p>

          <p>
            <mark>M</mark>ona <mark>Lisa</mark> = <code>mlisa</code>
          </p>

          <p>
            Or if you have a common name, it may also include the last 3 digits
            of your student ID number at the end, like:
          </p>

          <p>
            <mark>J</mark>oe <mark>Smith</mark>, ID#123<mark>456</mark> ={" "}
            <code>jsmith456</code>
          </p>
        </Accordion>
        <Accordion title="What's my password?">
          <p>
            To set or reset your password, go to:{" "}
            <a href="https://password.mcad.edu">https://password.mcad.edu</a>
          </p>
          <p>
            Your MCAD password can be used to access a variety of websites:{" "}
            <a href="https://canvas.mcad.edu">Canvas LMS</a>,{" "}
            <a href="https://learn.mcad.edu">Blackboard</a>,{" "}
            <a href="https://lynda.mcad.edu">Lynda.com</a>{" "}
          </p>
        </Accordion>
        <Accordion title="How do I buy books or supplies for my class?">
          You can find your required textbook information at the{" "}
          <a
            href="https://intranet.mcad.edu/department/art-cellar-and-bookstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCAD Art Cellar and Bookstore
          </a>
        </Accordion>
        <Accordion title="I don't see my class on Canvas or Blackboard. When will it show up?">
          <p>
            Courses open to students the Sunday before the official start date.
            So if your course begins Tue, Jan 22, the course would open at{" "}
            <b>12:01am on Sun, Jan 20</b>.
          </p>
          <p>
            Students in online courses will receive an email notification when
            their course opens.
          </p>
        </Accordion>
        <Accordion title="What do I do on the first day of my online class?">
          <p>Login. Read the Syllabus.</p>
          <p>
            If you're in an online course, you'll have a <b>Start Here!</b>{" "}
            section. Complete these tasks.
          </p>
          <p>
            All online courses also have a first day assignment of some kind –
            typically a discussion post where you introduce yourself. This is
            often how your professor will take attendance on the first day of
            class.Be sure to complete this and ask questions if you run into
            technical problems.
          </p>
        </Accordion>
        <Accordion title="What's the workload in an online course?">
          <p>
            The workload for online courses is the same for face-to-face
            courses. Expect 9 hours per week on average, but this will vary.
          </p>
        </Accordion>
        <Accordion title="Can someone help me?">
          <p>You bet!</p>

          <p>
            Just email <a href="mailto:online@mcad.edu">online@mcad.edu</a> or
            give us a call <a href="tel:6128743618">(612) 874-3618</a>.
          </p>

          <p>Our normal business hours are 9am-5pm, M-F. </p>
        </Accordion>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
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
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <h2 id="contact">Contact Online Learning</h2>
        <p>
          Please contact us if you have any questions. We're always happy to
          help!
        </p>
        <dl className="key-value-table">
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
      </div>
    </section>
  </DefaultLayout>
);
