import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
const Signup = () => {
  const uri = "http://localhost:4000/api";
  const [toggle, setToggle] = useState(false);
  const [eyeone, setEyeOne] = useState(false);
  const [eyetwo, setEyeTwo] = useState(false);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState(false);
  const [monitor, setMonitor] = useState(false);
  const [signUp, setSignUp] = useState({
    fullname: "",
    email: "",
    password: "",
    password_two: "",
  });

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        const email = res.data;
        const data = email.map((e) => {
          return e.email;
        });
        setEmail(data);
        console.log(data);
      })
      .catch((error) => console.log(error));

    axios
      .get(uri)
      .then((res) => {
        const pass = res.data;
        const data = pass.map((e) => {
          return e.password;
        });
        setPass(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [monitor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signUp.fullname) {
      alert("Full name can,t be empty");
      return false;
    }
    if (!(signUp.email.includes("@") && signUp.email.includes(".com"))) {
      alert("Not a valid Email address");
      return false;
    }
    if (!signUp.password) {
      alert("Password is required");
      return false;
    }
    if (signUp.password !== signUp.password_two) {
      alert(`Confirm password doesn't match with the password`);
      return false;
    }
    if (signUp.password === (signUp.fullname || signUp.email)) {
      alert(`Pls don't use ur public credentials as your password `);
      return false;
    }
    if (signUp.fullname === signUp.email) {
      alert(`Your email can't be your FullName`);
      return false;
    }

    //----------Get-----
    const emaiLiterator = email.values();
    const passwordLiterator = pass.values();
    try {
      for (const value of emaiLiterator) {
        if (signUp.email === value) {
          alert("email already in use");
          return false;
        }
      }
      for (const value of passwordLiterator) {
        if (signUp.password === value) {
          alert("Password already in use ");
          return false;
        }
      }

      await axios.post(uri, {
        fullname: signUp.fullname,
        email: signUp.email,
        password: signUp.password,
      });
      setMonitor(!monitor);
    } catch (error) {
      console.log(error);
    }

    setSignUp({
      ...signUp,
      fullname: "",
      email: "",
      password: "",
      password_two: "",
    });
    setEyeOne(false);
    setEyeTwo(false);
    setToggle(false);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <input
            value={signUp.fullname}
            type="text"
            placeholder="FullName"
            onChange={(e) => setSignUp({ ...signUp, fullname: e.target.value })}
          />
        </div>
        <div className="input">
          <input
            value={signUp.email}
            type="text"
            placeholder="Email"
            onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
          />
        </div>
        <div className="input">
          <span
            className="eyeone"
            onClick={() => setEyeOne(!eyeone)}
            id="dotone"
          >
            {eyeone ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
          <input
            value={signUp.password}
            type={`${eyeone ? "text" : "password"}`}
            placeholder="Password"
            onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
          />
        </div>
        <div className="input">
          <span
            className="eyeone"
            onClick={() => setEyeTwo(!eyetwo)}
            id="dottwo"
          >
            {eyetwo ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
          <input
            value={signUp.password_two}
            type={`${eyetwo ? "text" : "password"}`}
            placeholder="Confirm Password"
            onChange={(e) =>
              setSignUp({ ...signUp, password_two: e.target.value })
            }
          />
        </div>

        <div className="confirm">
          <span className="_dot_cover" onClick={() => setToggle(!toggle)}>
            {toggle ? <span className="dot"></span> : ""}
          </span>
          <span className="t_c">
            I accept the terms of <s>MEDHUB</s>
          </span>
        </div>
        {/* -------------------- */}
        <div className="_s-txt">
          <p className="_agree">
            By joining, or logging in, you accept <s> MEDHUB </s>
            <s>Terms of Service </s>and <s>Privacy Policy.</s>
          </p>
        </div>
        {toggle && (
          <div className="_btn-sub">
            <button>Sign Up</button>
          </div>
        )}
      </form>
    </>
  );
};

export default Signup;
