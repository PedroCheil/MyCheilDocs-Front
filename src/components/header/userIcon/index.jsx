import {Mars, Users, Venus}  from 'lucide-react';

function UserIcon({typeUser}) {

    const icons = {man: Mars, woman: Venus, group: Users}
    const IconComponent = icons[typeUser] || Users;

    return(
        <div className="">
            <span>Pedro</span>
            <IconComponent className="" />
            
        </div>
    )
}

export default UserIcon;