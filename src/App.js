import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div>
      <Header>
        <NavigationBar />
        <Intro />
      </Header>
      <div style={{ height: "800px" }}></div>
    </div>
  );
};

export default App;
