import SideBar from "./sideBar";
import UserIcon from "./userIcon";
import "./header.scss"


function HeaderApplication() {
  return (
    <div className="containerHeader">
        <SideBar />
          <h2>MyCheil-DOCS</h2>
        <UserIcon typeUser="group"/>
    </div>
  );
}

export default HeaderApplication;
