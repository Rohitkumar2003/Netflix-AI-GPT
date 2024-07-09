import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();


    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const HandlerSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            
        }).catch((error) => {
            navigate("/erroPage")
        });
    }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
               photoURL:photoURL,
              })
            );
            navigate("/Browse")
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });
        return ()=> unsubscribe() // unsubscribe with the components unmounts 
      }, []);

    return (
        <div className="absolute px-8  py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img
                className="w-36 p-2  "
                src={LOGO}
                alt="netflix-logo" />

            {user && <div className=" flex ">
                <img className="w-12 h-12 mt-2  mr-2 rounded-sm"
                    src={user?.photoURL}
                    alt="user-icon"
                />
                <button className="font-bold text-white underline "
                    onClick={HandlerSignOut}
                >Sign Out</button>
            </div>}

        </div>

    )
}

export default Header; 