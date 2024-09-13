import React, { useState } from "react";

export const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = ({ target }) => {
    const { value } = target;
    setFirstName(value);
    console.log(value, "here is value");
  };

  const handleLastNameChange = ({ target }) => {
    const { value } = target;
    setLastName(value);
  };

  const handleEmailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      `User with credentials ${firstName} ${lastName} ${email} was succcessfully sent to the backend`
    );
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div>
      <h3>Create User Form</h3>
      <form onSubmit={onSubmitHandler}>
        {/**This will just pass in the function, it won't be invoked right away. If I wanted to pass in additional parameters, then I'd use an arrow function */}
        <label>SignUp</label>
        <br></br>
        <input
          type="text"
          placeholder="enter first name here"
          required
          onChange={(e) => handleFirstNameChange(e)}
        />
        <br></br>
        <input
          type="text"
          placeholder="enter last name here"
          required
          onChange={(e) => handleLastNameChange(e)}
        />
        <br></br>
        <input
          type="email"
          placeholder="enter email name here"
          required
          onChange={(e) => handleEmailChange(e)}
        />
        <br></br>
        <button type="submit">SignUp</button>
      </form>
      <p>Already have an account? Click here to Login</p>
    </div>
  );
};
