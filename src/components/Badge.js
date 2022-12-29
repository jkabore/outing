import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";

const Badge = ({ children }) => {
  const colorKey = {
    Sea: "primary",
    Beach: "info",
    Temple: "danger",
    Hill: "light",
    Historic: "info",
    Animal:"secondary",
    Nature:"success",
    Park:"dark"
  };
  return (
    <h5 className="mt-1">
      <MDBBadge color={colorKey[children]}>{children}</MDBBadge>
    </h5>
  );
};

export default Badge;
