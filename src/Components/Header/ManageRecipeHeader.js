import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const ManageRecipeHeader = (props) => {
  return (
    <>
      <Link to="/" style={{ color: "white" }}>
        <FontAwesome
          className="super-crazy-colors"
          name="arrow-left"
          size="2x"
          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
        />
      </Link>
    </>
  );
};

export default ManageRecipeHeader;
