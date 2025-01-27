import { createContext, useState } from "react";



export const TokenContext = createContext()

import React from 'react'

export default function TokenContextProvider({children}) {

    const [token , setToken] = useState(localStorage.getItem("token"))

    return <TokenContext.Provider value={{token , setToken}}>
        {children}
    </TokenContext.Provider>
}
