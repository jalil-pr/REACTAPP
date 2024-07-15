import React from "react";
import { getToken } from "../../utils/HelperFunctions";
import { login } from "../../store/slices/authThunk";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./_login.scss";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import { useForm } from "react-hook-form";

const Login = () => {
  const { token, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  if (token || getToken()) {
    history.push("/landing");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (form) => {
    try {
      await dispatch(login(form)).unwrap();
      history.push("/landing");
    } catch (e) {
      alert("Username or password is wrong");
    }
  };

  return (
    <div className="page">
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Login
                </p>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="position-relative pb-3 form-input">
                    <MDBInput
                      className={`${errors.email ? "is-invalid" : ""}`}
                      label="Email"
                      {...register("email", {
                        required: "Email is required.",
                      })}
                      type="email"
                      id="Email"
                      name="email"
                    />
                  </div>
                  {errors.email && (
                    <div className="error-mssg">
                      <span className="invalid-feedback d-block">
                        {errors.email.message}
                      </span>
                    </div>
                  )}
                  <div className="position-relative pb-3 form-input">
                    <MDBInput
                      className={`${errors.password ? "is-invalid" : ""}`}
                      label="Password"
                      {...register("password", {
                        required: "Password is required.",
                      })}
                      id="Password"
                    />
                  </div>
                  {errors.password && (
                    <div className="error-mssg">
                      <span className="invalid-feedback d-block">
                        {errors.password.message}
                      </span>
                    </div>
                  )}

                  <div className="position-relative pb-3 form-input">
                    <label className="form-check-label">
                      Don't have an account?{" "}
                      <NavLink to="/Register" >Register</NavLink>
                    </label>
                  </div>

                  <MDBBtn className="mt-4" type="submit">
                    Login
                  </MDBBtn>
                </form>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Login;
