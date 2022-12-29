import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import excerpt from "../utils/excerpt";

const CommonTour = ({ title, imageFile, _id, description }) => {
  const navigate = useNavigate();
  return (
    <MDBCardGroup>
      <MDBCard style={{ maxWidth: "600px" }} className="mt-2">
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              className="rounded"
              src={imageFile}
              alt={title}
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle className="text-start">{title}</MDBCardTitle>
              <MDBCardText className="text-start">
                {excerpt(description, 40)}
              </MDBCardText>
              <div style={{ float: "left", marginTop: "-10px" }}>
                <MDBBtn
                  size="sm"
                  rounded
                  color="info"
                  onClick={() => navigate(`/tour/${_id}`)}
                >
                  Read More
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CommonTour;
