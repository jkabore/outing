import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import excerpt from "../utils/excerpt";

const TopTour = ({ topTour }) => {
  return (
    <>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {topTour.map((item, index) => (
          <MDBCol key={index}>
            <MDBCard>
              <Link to={`/tour/${item._id}`}>
                <MDBCardImage
                  src={item.imageFile}
                  alt={item.title}
                  position="top"
                />
              </Link>
              <span className="text-start tag-card">
                {item.tags.map((tag, index) => (
                  <Link key={index} to={`/tours/tag/${tag}`}>
                    #{tag}
                  </Link>
                ))}
              </span>
              <MDBCardBody>
                <MDBCardTitle className="text-start">{item.title}</MDBCardTitle>
                <MDBCardText className="text-start">
                  {excerpt(item.description, 45)}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
};

export default TopTour;
