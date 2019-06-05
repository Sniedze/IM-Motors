import React from "react";
import { Player } from "video-react";

export default props => {
  return (
    <Player autoPlay fluid="false" aspectRatio="16:9">
      <source src="http://artingineer.dk/video/instruction.mov" />
    </Player>
  );
};
