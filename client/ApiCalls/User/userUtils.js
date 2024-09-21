import axios from "axios";

const createUser = async (user) => {
  try {
    const { data: createdUser } = await axios.post("/api/user/create", user);
    //console.log("here is created User response", createdUser);
    return createdUser;
  } catch (err) {
    return err;
  }
};

export { createUser };
