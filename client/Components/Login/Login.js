import React, { useState } from "react";

export const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = ({ target }) => {
    const { value } = target;

    setUsername(value);
  };

  const onPasswordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  return (
    <div>
      <form type="submit">
        <label>Enter Username</label>
        <br></br>
        <input
          type="text"
          value={userName}
          onChange={(e) => onUserNameChange(e)}
          required
          placeholder="enter username here"
        />
        <br></br>
        <label>Enter Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e)}
          required
          placeholder="enter password here"
        />
      </form>
    </div>
  );
};
