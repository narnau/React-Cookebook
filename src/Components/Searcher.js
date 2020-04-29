import React from "react";
const Searcher = (props) => {
  return (
    <>
      <input
        onChange={(event) => {
          props.onChangeFunction(event.target.value);
        }}
      />
    </>
  );
};

export default Searcher;
