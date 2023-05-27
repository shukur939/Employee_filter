import React, { useContext } from "react";
import "../assets/sass/App.scss";
import senior from "../assets/img/logo.svg";
import seniorDark from "../assets/img/dark_logo.svg"
import Context from "../Context/Context";

const Navbar = () => {
  const { theme, setTheme } = useContext(Context);
  const changeTheme = () => {

    setTheme(theme === "light" ? "dark" : "light")
    if (theme === "light") {
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }
    else {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  }

  return (
    <nav className="navbar bg px-3">
      <div>
      {
        theme === "light" ?  <img src={senior} alt="" width="140px" height="60px" /> : <img src={seniorDark} alt="" width="140px" height="60px" />
      }
      </div>

      <div className="page-theme d-flex ">
        <button 
          className="toggle-button" 
          onClick={() => {changeTheme()}}
        >
          <i className="bi bi-brightness-high"></i>
          Light
        </button>
        <div className={`active-btn ${theme === "light" ? "left" : "right"}`}></div>
        <button 
          className="toggle-button" 
          onClick={() => {changeTheme()}}
        >
         <i className="bi bi-moon"></i>
          Dark
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
