import React from "react";
import { Link } from "react-router-dom";

const ManageRecipeHeader = (props) => {
  return (
    <>
      <Link to="/" style={{ color: "white" }}>
        <span className="ml-1">Back</span>
      </Link>
    </>
  );
};

export default ManageRecipeHeader;
