import React, { useEffect, useState } from "react";

const UpdateUser = () => {
  const [currentUser, setCurrentUser] = useState({});

  const onUserUpdateSubmit = (e) => {
    e.preventDefault();

    console.log(`Update User event handler clicked`);
  };

  useEffect(() => {
    //fetch the current user here with the util function
  }, []);

  return (
    <div>
      <form onSubmit={(e) => onUserUpdateSubmit(e)}>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};
