import SideBar from "./sideBar";
import UserIcon from "./userIcon";
function HeaderApplication() {
  return (
    <div className="flex justify-between m-8">
        <SideBar />
          <h2>MyCheil-DOCS</h2>
        <UserIcon typeUser="group"/>
    </div>
  );
}

export default HeaderApplication;
