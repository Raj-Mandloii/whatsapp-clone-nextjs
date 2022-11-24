import { useState } from "react";
import { createContext } from "react";

export const AccContext = createContext(null);

export const AccProvider = ({ children }) => {
    const [acc, setAcc] = useState();
    const [person, setPerson] = useState({})
    return (
        <AccContext.Provider value={{
            acc, setAcc, person, setPerson
        }}>
            {children}
        </AccContext.Provider>
    )
}