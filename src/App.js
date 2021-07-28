import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header>
        <NavigationBar />
        <Intro />
      </Header>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
