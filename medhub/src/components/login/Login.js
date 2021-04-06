import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get("http://localhost:4000/api");
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [toggle, setToggle] = useState(false);
  const [eyeone, setEyeOne] = useState(false);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
          />
        </div>

        <div className="input">
          <span className="eyeone" onClick={() => setEyeOne(!eyeone)}>
            {eyeone ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
          <input
            type={`${eyeone ? "text" : "password"}`}
            placeholder="Password"
            onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
          />
        </div>
        {/* ---------------------------- */}
        <div className="confirm">
          <span className="_dot_cover" onClick={() => setToggle(!toggle)}>
            {toggle ? <span className="dot"></span> : ""}
          </span>
          <span className="t_c">Keep me logged in</span>
        </div>
        {/* -------------------- */}
        <div className="_s-txt">
          <p className="_agree">
            By joining, or logging in, you accept <s> MEDHUB </s>
            <s>Terms of Service </s>and <s>Privacy Policy.</s>
          </p>
        </div>
        {/* --------------------- */}
        <div className="_btn-sub">{toggle && <button>Sign In</button>}</div>
      </form>
    </>
  );
};

export default Login;
