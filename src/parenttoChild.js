import React from "react";

function Child(props) {
  // SENDING DATA FROM CHIL TO PARENT
  const data = 234;

  return (
    <div>
      {/* {/* <h3>Ya u did it</h3>
      <h3>{props.some}</h3> */}
      <button
        onClick={() => {
          props.call(data);
        }}
      >
        click here
      </button>{" "}
      */
    </div>
  );
}

export default Child;
