import "./intro.css";
import "../../App.css";
import photo from "../../images/profile-image-salsa.jpg";

const Intro = (props) => {
  return (
    <section className="container-fluid intro">
      <div className="row pt-5 justify-content-evenly align-items-center intro">
        <div className="col-sm-12 gy-0 col-lg-5 align-items-center">
          <div className="intro__img-container text-center">
            <img
              className="rounded-circle border border-4 intro__profile-img"
              src={photo}
              alt="Natasha"
            />
          </div>
        </div>
        <div className="col-sm-12 gy-0 col-lg-7">
          <div className="mx-lg-5 mx-sm-1 intro__content">
            <div className="fs-1 fw-bolder">Hello! Hola! Ciao!</div>
            <div className="fs-1 fw-bold mb-2">
              I'm <span className="intro__name fw-bold">Natasha</span>
            </div>

            <div className="fs-3 lh-base intro-text">
              Full-stack developer || Birmingham, UK
            </div>
            <div className="fs-3 lh-base intro-text">
              Welcome to my portfolio!
            </div>

            <div className="pt-4">
              <img
                className="tech-logo"
                src="./assets/images/html-logo.png"
                alt=""
              />
              <img
                className="tech-logo"
                src="./assets/images/css3-logo.png"
                alt=""
              />
              <img
                className="tech-logo"
                src="./assets/images/react.png"
                alt=""
              />
              <img
                className="tech-logo"
                src="./assets/images/javascript-logo.png"
                alt=""
              />
              <img
                className="tech-logo"
                src="./assets/images/nodejs-logo.png"
                alt=""
              />
            </div>

            <div className="py-4 ms-3">
              <a
                href="https://www.linkedin.com/in/natasha-s-mann/"
                alt=""
                className="intro-link"
              >
                <i className="fab fa-3x fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/natasha-mann"
                className="intro-link"
                alt=""
              >
                <i className="fab fa-3x fa-github-square px-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
