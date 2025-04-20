import React from "react";

import "../css/inline.css";
function Inline(props) {
  return (
    <div className="elem">
      <h2>{props.name}</h2>
      <div className="moving">
        <div className="movingin">
          {props.path.map((item, index) => {
            return (
              <div className="movingin2" key={index}>
                <h5>{item.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Inline;
