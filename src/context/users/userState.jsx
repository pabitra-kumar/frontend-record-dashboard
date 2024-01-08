
import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
    const state = [
        {
            username: "user",
            password: "user12345"
        },
    ]

    const [status, setStatus] = useState(false);

    const update = () => {
        setStatus(!status);
    }

    return (
        <UserContext.Provider value={{ state, status, update }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;