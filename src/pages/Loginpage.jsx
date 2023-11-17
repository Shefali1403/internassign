import React from "react";
import { useState } from "react";
const Loginpage = (props) => {
  const [val, newVal] = useState({
    email: "",
    pass: "",
  });
  const [usererror, setUsererror] = useState({
    email: false,
    pass: false,
  });
  const but = () => {
    if (!usererror.email && !usererror.pass) {
      props.toggleVisibility();
    } else {
      console.log("notclick");
    }
  };
  const inputval = (e) => {
    const { name, value } = e.target;
    console.log(name);
    let item = value;
    newVal((oldval) => {
      return {
        ...oldval,
        [name]: value,
      };
    });
    if (item.length < 5) {
      setUsererror((item) => {
        return {
          ...item,
          [name]: true,
        };
      });
    } else {
      setUsererror((item) => {
        return {
          ...item,
          [name]: false,
        };
      });
    }
  };
  return (
    <>
      <div className="contbox">
        <div className="login-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            alt="notfound"
          />
        </div>
        <div className="container2">
          <div className="head">
            <h1>Instagram</h1>
          </div>
          <div className="box">
            <div id="first">
              <label for="id1">Username:</label>
              <input
                type="text"
                id="id1"
                className="br-l"
                name="email"
                onChange={inputval}
                value={val.email}
              />
              {usererror.email ? <span className="spa">Invalid</span> : ""}
            </div>
            <div id="sec">
              <label for="id2">Password:</label>
              <input
                type="password"
                id="id2"
                className="br-l"
                name="pass"
                onChange={inputval}
                value={val.pass}
              />
              {usererror.pass ? <span className="spa">Invalid</span> : ""}
            </div>
            <button onClick={but}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginpage;
