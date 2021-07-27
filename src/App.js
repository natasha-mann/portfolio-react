import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ overflowY: "scroll", height: "800px" }}></div>
    </div>
  );
};

export default App;
