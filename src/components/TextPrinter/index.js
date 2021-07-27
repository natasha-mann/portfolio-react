import "../../App.css";
import "./textPrinter.css";

import Typewriter from "typewriter-effect";

const TextPrinter = (props) => {
  return (
    <div className="text-printer">
      <Typewriter
        options={{
          strings: [
            "SOFTWARE ENGINEER",
            "FULL-STACK DEVELOPER",
            "LINGUIST",
            "DANCER",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TextPrinter;
