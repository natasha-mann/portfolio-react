import "../../App.css";

import NavigationBar from "../NavigationBar";
import Intro from "../Intro";

const Header = (props) => {
  return (
    <header>
      <NavigationBar />
      <Intro />
    </header>
  );
};

export default Header;
