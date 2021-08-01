import landing from "../../images/dishup-landing-page.png";
import home from "../../images/dishup-home.png";
import dashboard from "../../images/dishup-dashboard.png";
import mealplan from "../../images/dishup-mealplan.png";
import "./ProjectCarousel.css";

const ProjectCarousel = () => {
  return (
    <div className="card shadow mb-5 bg-body rounded w-75 mx-auto">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner main-project">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={landing}
              className="d-block w-100"
              alt="DishUp Landing Page"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={home} className="d-block w-100" alt="DishUp Home Page" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={dashboard}
              className="d-block w-100"
              alt="DishUp Dashboard"
            />
          </div>
          <div className="carousel-item">
            <img
              src={mealplan}
              className="d-block w-100"
              alt="DishUp Meal Plan page"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body">
        <h4 className="card-title pt-2 text-center">
          <u>DishUp || Full-stack App</u>
        </h4>
        <p className="card-text pt-3 text-center">
          A meal planning app to make your life as simple as possible, whilst
          enjoying delicious food. DishUp offers users a way to easily search
          for food, using a range of possible filters for dietary requirements
          and intolerances. These meals can be saved to meal plans on the user
          profile, so they can be easily referred back to in the future.
        </p>
        <div className="gap-2 d-flex pt-2 justify-content-center">
          <a
            className="
                      btn btn-primary btn-lg
                      center-aligned
                      w-50
                      project-btn
                    "
            href="https://github.com/natasha-mann/dish-up"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
          <a
            className="
                      btn btn-primary btn-lg
                      center-aligned
                      w-50
                      project-btn
                    "
            href="https://blooming-tundra-91244.herokuapp.com/"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Live App
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
