import { useState } from "react";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const Body = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="b-txt">
        <span className="sign">Sign{toggle ? " In" : " Up"}</span>
      </div>
      <div className="b-txt-2">
        <span className="_ls">
          {toggle ? "Don’t Have an Account?" : "Already Have an Account?"}
          <span onClick={() => setToggle(!toggle)} className="_green">
            {toggle ? " Sign up" : " Log In"}
          </span>
        </span>
      </div>
      {/* <br /> */}
      <p className="_or">Or</p>
      <div className="_bsl">
        <a href="/" className="_google">
          Sign {toggle ? " In" : " Up"} with Google
        </a>
      </div>
      {/* ---------------------- */}
      <div className="form-content">
        <div className="_form">{toggle ? <Login /> : <Signup />}</div>
      </div>
    </>
  );
};

export default Body;
