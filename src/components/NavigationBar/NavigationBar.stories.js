import React from "react";

import NavigationBar from "./index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
};

export const NavigationBarStory = (props) => <NavigationBar {...props} />;
