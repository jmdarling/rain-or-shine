import React, { useEffect, useState } from "react";
import { getRandomInt } from "../../utilities/number/number.utilities";

import "./clouds.css";

import Cloud from "./cloud.svg";

const NUMBER_OF_CLOUDS = 4;

export const Clouds: React.FC = () => {
  const [cloudStyles, setCloudStyles] =
    useState<{ left: string; top: string; width: string }[]>();

  useEffect(() => {
    const clouds = [];

    for (let i = 0; i < NUMBER_OF_CLOUDS; i++) {
      clouds[i] = {
        left: `${getRandomInt(-200, -10)}vw`,
        top: `${getRandomInt(10, 90)}vh`,
        width: `${getRandomInt(50, 200)}px`,
      };
    }

    setCloudStyles(clouds);
  }, []);

  return (
    <div className="clouds">
      {cloudStyles?.map((cloudStyle, index) => (
        <img
          alt=""
          className="clouds__cloud"
          key={index}
          src={Cloud}
          style={cloudStyle}
        />
      ))}
    </div>
  );
};
