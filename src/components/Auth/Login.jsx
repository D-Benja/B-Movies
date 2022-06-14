import React from "react";
import swAlert from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";
import { getAccessToken } from "../../services/getAccessToken";
import { formValidations } from "../../utils/formValidations";

const Login = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    formValidations(email, password);

    getAccessToken(email, password).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);

        swAlert({
          title: "Login Successful",
          icon: "success",
        });
        navigate("/list");
      } else {
        swAlert(<h2>Error ${res.status}</h2>);
      }
    });
  };

  return (
    <>
      {token ? (
        <Navigate to="/list" />
      ) : (
        <div className="mx-auto mt-20 flex items-center justify-center w-full">
          <div className="w-1/3 border rounded-xl flex flex-col items-center shadow-md">
            <h1 className="text-4xl my-10">Sign in</h1>
            <form className="mb-10 font-light" onSubmit={handleSubmit}>
              <label className="mb-10">
                <span>Email</span>
                <br />
                <input
                  className="border rounded-sm mt-2 mb-8"
                  type="text"
                  name="email"
                />
              </label>
              <br />
              <label>
                <span>Password</span>
                <br />
                <input
                  className="border rounded-sm mt-2"
                  type="password"
                  name="password"
                />
              </label>
              <br />
              <div className="flex justify-center items-center">
                <button
                  className="mt-10 py-2 px-10 border bg-slate-500 text-white rounded-md"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
