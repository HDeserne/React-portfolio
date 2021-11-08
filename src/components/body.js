import React from "react";

export default function Body() {
  return (
    <>
      <div className="about-me">
        <div className="title">
          <h2 id="section-1">About Me</h2>
        </div>
        <div className="content">
          Greeting, my name is Henry Deserne. I am an aspiring software developer.
        </div>
      </div>
      <section className="lower-page">
        <aside className="aside">
          {" "}
          <div className="work">
            <div className="title">
              <h2 id="section-2">Projects</h2>
            </div>
            <div className="card w-100" id="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">AJHS Food Diet</h5>
                <p className="card-text">
                  Project 1
                </p>
                <a
                  href="https://github.com/Nephrim/Project-1"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Github
                </a>
              </div>
            </div>
            <br />
            <div className="card w-100" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Watch Dogs</h5>
                <p className="card-text">Project 2</p>
                <a
                  href="https://github.com/Nephrim/Project-2"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="card w-100" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Soles 'R US</h5>
                <p className="card-text">Project 3</p>
                <a
                  href="https://github.com/Williamlam343/project-3"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Github
                </a>
              </div>
            </div>
          <div className="contact-me">
            <div className="title">
              <h2 id="section-3">Contact Me</h2>
            </div>
            <div className="list-group">
              <a
                href="mail: Hdeserne@gmail.com"
                className="list-group-item list-group-item-action"
              >
                Email
              </a>
              <a
                href="https://github.com/HDeserne"
                target="_blank"
                className="list-group-item list-group-item-action"
              >
                Github
              </a>
              <button
                type="button"
                className="list-group-item list-group-item-action"
                disabled
              >
                Phone: 480-252-2759
              </button>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}