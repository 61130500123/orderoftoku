import React, {useContext } from "react"
import { AuthContext } from "./Auth"
import firebase from "../config"

const User = () => {
    const{ currentUser } = useContext(AuthContext);

    return (
        <div>
            <div className="container">
                <p>
                    {currentUser.email.name}
                </p>
                <button onClick={() => firebase.auth().signOut()} class="btn btn-danger">Sign Out</button>
            </div>
        </div>
    )
}

export default User;