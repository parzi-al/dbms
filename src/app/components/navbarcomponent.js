import React from "react";
import styles from "./bubble.module.css";

const Navbutton = (props) => {
  return (
    <div>
  
      <BubbleText text={props.text} />
    </div>
  );
};

const BubbleText = (props) => {

  return (
    <h2 className="text-center text-5xl border-y-2 border-t-0 py-6 font-medium  ">
      {props.text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Navbutton;