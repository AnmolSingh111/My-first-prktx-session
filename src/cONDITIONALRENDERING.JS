import { AnimationOutlined } from "@mui/icons-material";
import { useState } from "react";

function Conditional() {
  const [loggedIn, sETLOGGEDIN] = useState(true);

  return <div>{loggedIn ? <h1> ANIL</h1> : <h1>helo</h1>}</div>;
}

export default Conditional;
