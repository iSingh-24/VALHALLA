import React, { useState } from "react";
//TODO: Add in single user ids
const SinglerUser = () => {
  const [name, setName] = useState("");

  return <div>The User is {name ? name : "No User Currently"}</div>;
};

export default SinglerUser;
