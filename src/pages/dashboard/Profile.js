import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// components
import { FormRow } from "../../components";

// store
import { updateUser } from "../../store/user/userSlice";

/// styles
import styles from "../../styles/profilePageStyles.module.scss";

const Profile = () => {
  /// hooks
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  //// handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("All fields need to be filled in");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  /// return
  return (
    <div className={styles.container}>
      <form className={`form ${styles.form}`} onSubmit={handleSubmit}>
        <h3 className={styles.title}>profile</h3>
        <div className={styles.formCenter}>
          {/* name */}
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
            styles={styles}
          />
          {/* last name */}
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
            styles={styles}
          />
          {/* email */}
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
            styles={styles}
          />
          {/* location */}
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
            styles={styles}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
