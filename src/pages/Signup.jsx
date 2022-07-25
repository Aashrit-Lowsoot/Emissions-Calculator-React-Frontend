import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Signup() {
  const [mail, setMail] = useState("");
  const [pas, setPas] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
  };
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  return (
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
          <h1 className="signup__header">Sign up</h1>
          <p className="signup__message">
            Already have an account?
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="signup__form">
          <div className="signup__formonsite">
            <input
              {...register("name")}
              required
              placeholder="Name"
              className="signup__input"
              type="text"
            />
            <input
              {...register("email")}
              required
              placeholder="company mail"
              className="signup__input"
              type="email"
              onChange={(eve) => setMail(eve.target.value)}
            />
            <input
              {...register("emailconf")}
              required
              placeholder="confirm mail"
              className="signup__input"
              pattern={mail}
              type="email"
              title="Emails don't match"
            />
            <input
              placeholder="password"
              required
              {...register("password")}
              className="signup__input"
              type="text"
              title="Must contain minimum 8 maximum 16 characters with at least 1 Upper Case, 1 lower case, and 1 numeric character"
              onChange={(eve) => setPas(eve.target.value)}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
            />
            <input
              type="text"
              {...register("passwordconf")}
              required
              placeholder="confirm password"
              pattern={pas}
              title="Passwords don't match"
              className="signup__input"
            />
            <button type="submit" className="signup__button">
              Sign up
            </button>
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
              <button className="fangbtn fangbtn--meta hide">
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
        </form>
      </section>
    </div>
  );
}
