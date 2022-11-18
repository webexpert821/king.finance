import React, { createContext, useState, useContext } from 'react'
import { localStorageSet } from '../utils/localStorage';

const StoreContext = createContext({});


const StoreProvider = (props) => {

    const [session, setSession] = useState("Rang Su Ki");
    localStorageSet("temp", session);

    return (
        <StoreContext.Provider
            value=
            {{
                session,
                setSession
            }}
        >
            { props.children }
        </StoreContext.Provider>
    )
}

export default StoreProvider;

export const useStore = () => {
    const context = useContext(StoreContext)
    if(!context) {
        throw new Error("can't find context")
    }
    return context
}