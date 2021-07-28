import classNames from "classnames";

import "./FlexContainer.css";

const FlexContainer = ({ id, position, children }) => {
  return (
    <div
      id={id}
      className={classNames("flex-container", {
        "flex-container--centered": position === "center",
      })}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
