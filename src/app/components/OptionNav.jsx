"use client";
import React, { useState } from "react";
import styles from "./OptionNav.module.css";

const OptionNav = () => {
  // Set the default active option to the first option
  const [activeOption, setActiveOption] = useState(0);

  // List of options
  const options = ["Travel", "Digital", "Brand", "Merch"];

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              activeOption === index ? styles.active : ""
            }`}
            onClick={() => setActiveOption(index)} // Set active option on click
          >
            {option}
          </div>
        ))}
      </div>
      <div className=" mt-5 flex justify-center">
        <img src="Component 32.png" alt="travel" />
      </div>
      <div className="mt-12 flex justify-center">
        <img src="Frame 1544.png" alt="" />
      </div>
      <div className="mt-5 flex justify-center">
        <img src="Frame 1162.png" alt="" />
      </div>
      <div className="mt-8 flex justify-center">
        <img src="Frame 1662 (1).png" alt="" />
      </div>
      <div className="mt-14 flex justify-center">
        <img src="Frame 1170.png" alt="" />
      </div>
    </div>
  );
};

export default OptionNav;
