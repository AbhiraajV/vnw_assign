import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import UseReload from "../../Hooks/UseReload";
import "./Helper/Navbar.css";
type Props = {
  setAddTaskPage: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ setAddTaskPage }: Props) {
  return (
    <div className="Navbar">
      <div className="Logo">TASKS</div>
      <div className="SearchBox">
        <FaSearch color="gray" />
        <input className="InputNavbar" placeholder="Search" />
      </div>
      <div className="NavButtons">
        <button className="btn" onClick={() => setAddTaskPage(true)}>
          <IoMdAdd size={"20px"} />
          Add Task
        </button>
        <IoLogOutOutline
          size={"30px"}
          color={"gray"}
          onClick={() => {
            localStorage.removeItem("user");
            UseReload();
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
