import React from "react";
import DefaultLayout from "../DefaultLayout";
import Tip from "../../components/Tip";
import Video from "../../components/Video";
import Accordion from "../../components/Accordion";
import overviewVideos from "./overviewVideos";

import turtleImg from "../../img/dragon-turtle-amitchell.png";
import "./OrientationPage.scss";

const renderVideoAccordions = (videos) =>
  videos.map(({ title, src, description }) => (
    <Accordion key={src}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Content>
        <Video title={title} src={src} />
        {description || ""}
      </Accordion.Content>
    </Accordion>
  ));

const OrientationPage = () => (
  <DefaultLayout className="orientation-student-page">
    <header className="page-title">
      <h1 className="container">
        Using Canvas
        <span className="subtitle">Student Orientation</span>
      </h1>
    </header>
    <section className="section-interlude">
      <img src={turtleImg} alt="Dragon Turtle by Alex Mitchell" />
      <p className="image-by">Illustration by Alex Mitchell, MFA &rsquo;16</p>
    </section>
    <section className="section-intro">
      <div className="container">
        <h2>Welcome.</h2>

        <p>
          This semester your course will be using a new Learning Management
          System, Canvas LMS. Before your first day of class, please review the
          resources below.
        </p>
      </div>
    </section>
    <section className="page-section">
      <div className="container">
        <h2>An Overview of Canvas</h2>
        <Video
          title="Canvas Overview"
          src="https://player.vimeo.com/video/74677642?title=0&amp;byline=0&amp;portrait=0"
        />
        <Tip>
          Do you prefer watching videos on 1.25x or 2x speed? If you use Chrome,
          you may want to download the{" "}
          <a
            href="https://chrome.google.com/webstore/detail/vimeo-repeat-speed/noonakfaafcdaagngpjehilgegefdima"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vimeo Repeat &amp; Speed Extension
          </a>{" "}
          to make your Vimeo video experience better!
        </Tip>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <h2>Useful Canvas Tools</h2>
        {renderVideoAccordions(overviewVideos)}
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <h2 id="tips-for-ol-students">Frequently Asked Questions</h2>

        <Accordion>
          <Accordion.Header id="faq-where-to-login">
            Where do I go to login to Canvas?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Canvas LMS is the website where you will be learning online. Go
              to:{" "}
              <a
                href="https://canvas.mcad.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://canvas.mcad.edu
              </a>{" "}
              to login.
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-username">
            What&rsquo;s my username?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              If you&rsquo;re enrolled in an online course, you should have
              received an email with your username and your student ID number
              one week before the course began.
            </p>
            <p>
              Your username is usually the first initial + last name. For
              example:
            </p>

            <p>
              <mark>M</mark>ona <mark>Lisa</mark> = <code>mlisa</code>
            </p>

            <p>
              Or if you have a common name, it may also include the last 3
              digits of your student ID number at the end, like:
            </p>

            <p>
              <mark>J</mark>oe <mark>Smith</mark>, ID#123<mark>456</mark> ={" "}
              <code>jsmith456</code>
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-password">
            What&rsquo;s my password?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              To set or reset your password, go to:{" "}
              <a
                href="https://password.mcad.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://password.mcad.edu
              </a>
            </p>
            <p>
              Your MCAD password can be used to access a variety of websites:{" "}
              <a
                href="https://canvas.mcad.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canvas LMS
              </a>
              ,{" "}
              <a
                href="https://learn.mcad.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blackboard
              </a>
              ,{" "}
              <a
                href="https://lynda.mcad.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lynda.com
              </a>{" "}
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-update-name">
            How do I change my name in Canvas (and other MCAD systems)?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              You can change your institutionally recognized name by updating
              your record in <a href="https://my.mcad.edu">my.mcad.edu</a>.
            </p>

            <p>
              See:{" "}
              <a href="https://intranet.mcad.edu/kb/submitting-institutionally-recognized-name-update">
                Submitting an IR Name Update
              </a>
              .
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-personal-pronouns">
            How do I set my personal pronouns?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Canvas makes it easy to set your personal pronouns in your
              profile.
            </p>

            <p>
              See:{" "}
              <a href="https://intranet.mcad.edu/kb/how-do-i-set-my-personal-pronouns-canvas">
                How to Set Personal Pronouns in Canvas
              </a>
              .
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-books">
            What books or supplies are required for my class?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Required textbook information can be found at{" "}
              <a
                href="https://canvas.mcad.edu/books"
                target="_blank"
                rel="noopener noreferrer"
              >
                canvas.mcad.edu/books
              </a>{" "}
              or{" "}
              <a
                href="https://my.mcad.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                my.mcad.edu
              </a>
            </p>
            <p />
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-course-open-date">
            I don&rsquo;t see my class on Canvas. When will it show up?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              Courses open to students the Sunday before the official start
              date. You will NOT see your course in canvas before it opens.
            </p>
            <p>
              Students in online courses will receive an email notification when
              their course opens.
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-day-one">
            What do I do on the first day of my online class?
          </Accordion.Header>
          <Accordion.Content>
            <p>Login.</p>
            <p>Read the Syllabus.</p>
            <p>
              If you&rsquo;re in an online course, you&rsquo;ll have a{" "}
              <b>Start Here!</b> section. Complete these tasks.
            </p>
            <p>
              All online courses also have a first day assignment of some kind –
              typically a discussion post where you introduce yourself. This is
              often how your professor will take attendance on the first day of
              class. Be sure to complete this and ask questions if you run into
              technical problems.
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-online-course-workload">
            What&rsquo;s the workload in an online course?
          </Accordion.Header>
          <Accordion.Content>
            <p>
              The workload for online courses is the same for face-to-face
              courses. Expect 9 hours per week on average, but this will vary.
            </p>
          </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Header id="faq-getting-help">
            Can someone help me?
          </Accordion.Header>
          <Accordion.Content>
            <p>You bet!</p>

            <ul>
              <li>
                <a href="https://cases.canvaslms.com/liveagentchat?chattype=student">
                  Chat with Canvas Support
                </a>
              </li>
              <li>
                Canvas Support Hotline:{" "}
                <a
                  href="tel:18557444304"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1 (855) 744-4304
                </a>
              </li>
              <li>
                Email MCAD Online Learning:{" "}
                <a
                  href="mailto:online@mcad.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  online@mcad.edu
                </a>
              </li>
              <li>
                Call MCAD Online Learning:{" "}
                <a
                  href="tel:6128743618"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (612) 874-3618
                </a>
              </li>
            </ul>
          </Accordion.Content>
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
            <a
              href="https://kb.mcad.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              MCAD Knowledge Base
            </a>
          </li>
          <li>
            <a
              href="https://intranet.mcad.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              MCAD Intranet
            </a>
          </li>
          <li>
            <a
              href="https://mcad.edu/about-mcad/academic-calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          Please contact us if you have any questions. We&rsquo;re always happy
          to help!
        </p>
        <dl className="key-value-table">
          <dt>Email</dt>
          <dd>
            <a
              href="mailto:online@mcad.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              online@mcad.edu
            </a>
          </dd>

          <dt>Phone</dt>
          <dd>
            <a href="tel:6128743618" target="_blank" rel="noopener noreferrer">
              (612) 874-3618
            </a>
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

export default OrientationPage;
