import {Mars, Users, Venus}  from 'lucide-react';
import "./userIcon.scss";

function UserIcon({typeUser}) {

    const icons = {man: Mars, woman: Venus, group: Users}
    const IconComponent = icons[typeUser] || Users;

    return(
        <div className="containerIcon">
            <span className='iconName'>Pedro</span>
            <IconComponent />
        </div>
    )
}

export default UserIcon;