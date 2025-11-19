import ProfileButton from "../buttonsActions/profileButton";
import LogoutButton from "../buttonsActions/logoutButton";

function ModalOptions(){
    //Devemos receber as informacoes do usuario por aqui
    return(
        <>
            <ProfileButton />
            <LogoutButton />
        </>
    )
}

export default ModalOptions;