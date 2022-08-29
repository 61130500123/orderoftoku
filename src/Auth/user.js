import React, {useContext } from "react"
import { AuthContext } from "./Auth"
import firebaseConfig from "../config"

const User = () => {
    const{ currentUser } = useContext(AuthContext);

    return (
        <div>
            <div className="container">
                <p>
                    {currentUser.email.name}
                </p>
                <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
            </div>
        </div>
    )
}

export default User;