import React from "react";
import Conditional from "./cONDITIONALRENDERING.JS";
import Child from "./parenttoChild";

function Parent() {
  // const something = 10;

  // // FUNCTION CALLING IN CHILD
  // function call(data) {
  //   alert(data);
  // `send dunction fromm parent ro child  and NOW IT IS REGARDING CHILD TO PARENT ${data}`}

  return <Conditional />;
}
export default Parent;
//  <div>
//       { <Child some={something} /> }
//       {["D", "R", "r"].map((item) => (
//         <Child />
//       ))}
//       { <Child call={call}></Child> }
//     </div>
