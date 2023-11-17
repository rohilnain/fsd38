import { useContext } from "react";
import context from "../utilities/context";

const Profile=()=>{
    const userName=useContext(context);
    return(
        <>
        <h1>{userName}</h1>
        </>
    )
}
export default Profile;