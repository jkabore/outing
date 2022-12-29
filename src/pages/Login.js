import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import * as EmailValidator from "email-validator";
import { login } from "../redux/features/authSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const [checkEmail, setcheckEmail] = useState(true);
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  useEffect(() => {
    setcheckEmail(EmailValidator.validate(email));
  }, [email]);
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    if (email && password && checkEmail) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x mt-2" />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required={true}
                invalid="true"
                validation="Please provide your email"
              />
            </div>

            <div className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required={true}
                invalid="true"
                validation="Please provide your password"
              />
            </div>
            <div className="col-12">
              {checkEmail ? (
                <MDBBtn style={{ width: "100%" }} className="mt-2">
                  {loading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  Login
                </MDBBtn>
              ) : (
                <MDBBtn disabled style={{ width: "100%" }} className="mt-2">
                  Login
                </MDBBtn>
              )}
            </div>
          </MDBValidation>
          <br />
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account ? Sign Up</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Login;
