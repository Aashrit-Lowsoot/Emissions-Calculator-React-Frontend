import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseurl } from "../api/url";
import { useAuth } from "../contexts/Authcontext";

export function Login() {
  const { isuserloggedin, setIsuserloggedin, setToken } = useAuth();
  const [usermail, setUsermail] = useState("");
  const [userpword, setUserpword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";
  const buttonstatus =
    usermail.length > 0 && userpword.length > 0 ? false : true;
  async function handleLogin(params) {
    try {
      setLoader(true);
      const { email, password } = params;
      const response = await axios.post(`${baseurl}/login`, {
        email,
        password,
      });
      console.log(response);
      console.log(response.status);
      if (response.status === 200) {
        const stringifieddata = JSON.stringify({
          loginstatus: true,
          clienttoken: response.data.token,
        });
        localStorage.setItem("login", stringifieddata);
        setIsuserloggedin(true);
        setToken(response.data.token);
        navigate(from);
        toast.success("login sucessfull", {
          position: "top-right",
          autoClose: 1998,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log({ error });
      toast.error("login failed", {
        position: "top-right",
        autoClose: 1998,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <>
      <div className="signupage">
        <div className="brand">
          <div className="brand__cont">
            <img
              className="brand__image"
              src="https://media-exp2.licdn.com/dms/image/C560BAQHmrQrq-ifvpQ/company-logo_200_200/0/1627669001150?e=1665619200&v=beta&t=8cWndk6bBeVRicz1to769LOAshKTp9Vv039pDBDA3So"
              alt=""
            />
          </div>
        </div>
        <section className="signup">
          <div className="signup__head">
            <h1 className="signup__header">Login</h1>
            <p className="signup__message">
              Dont have an account?{" "}
              <Link className="link" to="/register">
                Sign up
              </Link>
            </p>
          </div>
          <div className="signup__form">
            <div className="signup__formonsitelogin">
              <input
                onChange={(event) => setUsermail(event.target.value)}
                placeholder="Email"
                className="signup__input"
                type="text"
              />
              <input
                onChange={(event) => setUserpword(event.target.value)}
                placeholder="Password"
                className="signup__input"
                type="text"
              />
              {isuserloggedin ? (
                <button
                  className="signup__button"
                  onClick={() => {
                    localStorage.removeItem("login");
                    setIsuserloggedin(false);
                    setToken(null);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleLogin({ email: usermail, password: userpword })
                  }
                  className="signup__button"
                  disabled={buttonstatus}
                >
                  Login
                  {loader && (
                    <span className="spin__loader spin__rotate"></span>
                  )}
                </button>
              )}
            </div>
            <div className="signup__formonthirdparty">
              <div className="fangcont">
                <button className="fangbtn fangbtn--google">
                  <div className="fangbtn__iconcont">
                    <img
                      className="fangbtn_icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="fang"
                    />
                  </div>
                  <div className="fangbtn__textcont">
                    <div className="fangbtn__text">Continue with Google</div>
                  </div>
                </button>
                <button className="fangbtn fangbtn--meta">
                  <div className="fangbtn__iconcont">
                    <img
                      className="fangbtn_icon"
                      src="https://www.svgrepo.com/show/183607/facebook.svg"
                      alt="fang"
                    />
                  </div>
                  <div className="fangbtn__textcont">
                    <div className="fangbtn__text">Continue with Facebook</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
