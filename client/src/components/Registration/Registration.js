import React from "react";
import store from "../../store";
import { registerEvent } from "../../store/slices/authThunk";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getToken } from "../../utils/HelperFunctions";
import { useHistory } from "react-router-dom";
import "./_registration.scss";
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
import { NavLink } from "react-router-dom";

const Registration = () => {
  const history = useHistory();
  const { token} = useSelector((state) => state.auth);
  if (token || getToken()) {
    history.push("/landing");
  }

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const handleForm = async (form) => {
    await store.dispatch(registerEvent(form)).unwrap();
    history.push("/login");
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
                  Sign up
                </p>
                <form onSubmit={handleSubmit(handleForm)}>
                  <div className="position-relative pb-3 form-input">
                    <MDBInput
                      className={`${errors.firstName ? "is-invalid" : ""}`}
                      label="First name"
                      {...register("username", {
                        required: "This field is required.",
                        minLength: {
                          value: 3,
                          message:
                            "user name should be at least 3 characters long.",
                        },
                        maxLength: {
                          value: 25,
                          message:
                            "First name should be at most 10 characters long.",
                        },
                      })}
                      id="First name"
                      
                    />
                  </div>
                  {errors.username && (
                    <div className="error-mssg">
                      <span className="invalid-feedback d-block">
                        {errors.username.message}
                      </span>
                    </div>
                  )}
                  <div className="position-relative pb-3 form-input">
                    <MDBInput
                      className={`${errors.email ? "is-invalid" : ""}`}
                      label="Email"
                      {...register("email", {
                        required: "This field is required.",
                      })}
                      type="email"
                      id="Email"
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
                        required: "This field is required.",
                        minLength: {
                          value: 6,
                          message:
                            "Password should be at least 6 characters long.",
                        },
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
                    <MDBInput
                      className={`${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                      label="Confirm password"
                      {...register("confirmPassword", {
                        required: "Passwords should match",
                      })}
                      onChange={(e) => {
                        if (
                          getValues("root.password") !==
                          getValues("root.confirmPassword")
                        ) {
                          console.log(getValues("root.password"));
                          return setError("confirmPassword", {
                            type: "validate",
                            message: "Passwords should match!",
                          });
                        }
                      }}
                      id="Confirm password"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <div className="error-mssg">
                      <span className="invalid-feedback d-block">
                        {errors.confirmPassword.message}
                      </span>
                    </div>
                  )}
                  <div className="position-relative pb-3 form-input">
                    <label className="form-check-label">
                      Already have an account?{" "}
                      <NavLink to="/login">Login</NavLink>
                    </label>
                  </div>
                  <MDBBtn className="mt-4" type="submit">
                    Register
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

export default Registration;
