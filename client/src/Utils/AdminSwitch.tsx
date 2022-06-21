import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import Switch from "../Components/SwitchBox/Switch";
import UseReload from "../Hooks/UseReload";

type Props = {
  setIsAdmin: React.Dispatch<
    React.SetStateAction<{
      [k: string]: any;
    }>
  >;
  isAdmin: {
    [k: string]: any;
  };
};

function AdminSwitch({ setIsAdmin, isAdmin }: Props) {
  if (localStorage.getItem("user")) return <></>;
  return (
    <div className="admin_user_switch">
      {!localStorage.getItem("admin") ? (
        <Switch
          options={[{ type: "admin", label: "Login as admin?" }]}
          setToShow={setIsAdmin}
          toShow={isAdmin}
        />
      ) : (
        <IoLogOutOutline
          size={"30px"}
          color={"gray"}
          onClick={() => {
            localStorage.removeItem("admin");
            UseReload();
          }}
        />
      )}
    </div>
  );
}

export default AdminSwitch;
