import { useState } from "react";
import { createContext } from "react";

export const AccContext = createContext(null);

export const AccProvider = ({children}) => {
    const [acc, setAcc] = useState();
    console.log("ACC INFO :::::::: ",acc)
    return (
        <AccContext.Provider value={{
            acc, setAcc
        }}>
            {children}
        </AccContext.Provider>
    )
}