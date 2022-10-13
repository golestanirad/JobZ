import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//// components
import { Logo, FormRow } from "../components";

//// store
import { loginUser, registerUser } from "../store/user/userSlice";

/// styles
import styles from "../styles/registerPageStyles.module.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  /// hooks
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  //// handlers
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  ///// return
  return (
    <div className={`full-page ${styles.container}`}>
      <form className={`form  ${styles.registerForm}`} onSubmit={onSubmit}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h3 className={styles.title}>
          {values.isMember ? "Login" : "Register"}
        </h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button
          type="submit"
          className={`btn btn-block ${styles.formBtn}`}
          disabled={isLoading}
        >
          {isLoading ? "loading..." : "submit"}
        </button>
        <button
          type="button"
          className={`btn btn-block btn-hipster ${styles.formBtn}`}
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
        >
          {isLoading ? "loading..." : "demo app"}
        </button>
        <p className={styles.text}>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className={styles.memberBtn}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}
export default Register;
