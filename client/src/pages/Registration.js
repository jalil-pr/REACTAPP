import React, { useState } from "react";
import store from "../store";
import { register } from "../store/slices/authThunk";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { getToken } from '../utils/HelperFunctions';
import { useHistory } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token, loading } = useSelector((state) => state.auth);
  if (token || getToken()) {
    history.push("/landing");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(register({ username, email, password }));
  };
  return (
    <div className="page">
      <p>Registration page</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
          value={username}
        />
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          value={email}
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
        <FormInput
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
        />
        <Button type="submit" name="Register" />
      </form>
    </div>
  );
};

export default Registration;
