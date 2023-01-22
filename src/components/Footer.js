import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div className="mt-5">
      <MDBFooter className="fixed-bottom">
        <div
          className="text-center p-2"
          style={{ backgroundColor: "#6188A2 ", color: "#fff" }}
        >
          jkabore © Copyright:
          <a className="text-reset fw-bold" href="/">
            &nbsp;Outing
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
