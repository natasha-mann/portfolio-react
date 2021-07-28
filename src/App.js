import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <Header>
        <NavigationBar />
        <Intro />
      </Header>
      <AboutMe />
    </div>
  );
};

export default App;
