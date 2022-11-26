import React, {createContext, useState} from "react";

export const UserInfoContext = createContext ({})

function UserInfoProvider ({children}) {
     const [userSessionInfo , setUserSessionInfo] = useState ({
        token:"",
        name:""
    })
    
    const config = {
        headers: {
            Authorization: `Bearer ${userSessionInfo.token} `
        }
    }

    const [logInObj,setLogInObj] = useState({
        email:"",
        password:""        
    })

    return (
        <UserInfoContext.Provider value={{userSessionInfo , setUserSessionInfo, config, logInObj,setLogInObj }}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoProvider