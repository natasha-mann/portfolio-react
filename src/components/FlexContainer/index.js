import classNames from "classnames";

import "./FlexContainer.css";

const FlexContainer = ({ id, position, padding, colour, children }) => {
  return (
    <div
      id={id}
      className={classNames("flex-container", {
        "flex-container--centered": position === "center",
        "flex-container--padded": padding === "true",
        "flex-container--grey": colour === "grey",
      })}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
