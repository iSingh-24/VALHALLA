import React, { useState } from "react";
import { createUser } from "../../../ApiCalls/User/userUtils";
/**TODO:
 * 1) Add a possible Modal to this Component
 */

export const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = ({ target }) => {
    const { value } = target;
    setFirstName(value);
  };

  const handleLastNameChange = ({ target }) => {
    const { value } = target;
    setLastName(value);
  };

  const handleEmailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const createdUser = await createUser({ firstName, lastName, email });

    if (createdUser.response && createdUser.response.data) {
      alert(createdUser.response.data);
    }

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
          value={firstName}
        />
        <br></br>
        <input
          type="text"
          placeholder="enter last name here"
          required
          onChange={(e) => handleLastNameChange(e)}
          value={lastName}
        />
        <br></br>
        <input
          type="email"
          placeholder="enter email name here"
          required
          onChange={(e) => handleEmailChange(e)}
          value={email}
        />
        <br></br>
        <button type="submit">SignUp</button>
      </form>
      <p>Already have an account? Click here to Login</p>
    </div>
  );
};
