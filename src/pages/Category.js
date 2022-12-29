import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import CommonTour from "../components/CommonTour";

const Category = () => {
  const { totalToursData, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const { category } = useParams();

  if (loading) {
    return <Spinner />;
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "120px",
        maxWidth: "900px",
        alignContent: "center",
      }}
    >
      <h3 className="text-center">Category: {category}</h3>
      <hr style={{ maxWidth: "570px" }} />
      {totalToursData
        ?.filter((item) => item.category === category)
        .map((item) => (
          <CommonTour key={item._id} {...item} />
        ))}
    </div>
  );
};

export default Category;
