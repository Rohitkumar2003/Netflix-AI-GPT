import { getAuth, signOut } from "firebase/auth"; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const HandlerSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
           navigate("/");
        }).catch((error) => {
            navigate("/erroPage")    
        });
    }

    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img
                className="w-36 p-2"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="netflix-logo" />

           {user &&  <div className=" flex ">
                <img className="w-12 h-12 mt-2 "
                    src={user?.photoURL}
                    alt="user-icon"
                />
                <button className="font-bold text-white "
                    onClick={HandlerSignOut}
                >Sign Out</button>
            </div>}

        </div>

    )
}

export default Header; 