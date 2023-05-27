import React from "react";
import Navbar from "./Components/Navbar";
// import MainPage from "./Components/MainPage";
// import Table from "./Components/Table";
import Task from "./Components/Task/Task";
import Context from "./Context/Context";

function App() {
  const {theme} = React.useContext(Context)
  React.useEffect(() => {
    localStorage.setItem("darkMode", (theme))
  }, [theme])
  return (
    <div className={`App ${theme}`}>
      <Navbar/>
      <Task/>
      {/* <MainPage/>
      <Table/> */}
    </div>
  );
}

export default App;
