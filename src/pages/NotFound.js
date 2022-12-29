import React from "react";

const NotFound = () => {
  return (
    <div>
      <img
      
        style={{ height: 500, width: 500 }}
        src={require("../utils/404.jpg")}
        alt="Not Found"
      />
    </div>
  );
};

export default NotFound;
