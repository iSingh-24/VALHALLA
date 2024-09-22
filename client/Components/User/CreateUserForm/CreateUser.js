import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../../ApiCalls/User/userUtils";
import { GlobalUserState } from "../../../context/UserContext";

/**TODO:
 * 1) Add a possible Modal to this Component
 * 2) Brush up on useEffect Hook and other life cycle methods
 */

export const CreateUser = () => {
  const { state, dispatch } = GlobalUserState();
  // console.log(state, "here is state");
  // console.log(dispatch, "here is dispatch");

  //to dispatch an action you can do it as the following

  /**
   *
   * dispatch({type:"SET_USER", payload:"TEST USER"})
   *
   * in our case we are going to grab the user from the token that will be logged in. In the case wher e
   * we set all the current users or items or workouts, we can have a dispatch action that will add to the payload for
   * all the workouts. This will be done in a useEffect hook upon the first load of the component.
   *
   */
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
      <Link to="/login">Already have an account? Click here to Login</Link>
    </div>
  );
};
