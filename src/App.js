import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div>
      <NavigationBar />

      <Intro />
      <div style={{ height: "800px" }}></div>
    </div>
  );
};

export default App;
