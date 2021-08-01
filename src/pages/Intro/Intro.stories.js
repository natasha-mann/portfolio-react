import React from "react";

import Intro from "./index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";

export default {
  title: "Components/NavigationBar",
  component: Intro,
};

export const IntroStory = (props) => <Intro {...props} />;
