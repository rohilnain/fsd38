import context from "./context";
import React from 'react';

const ContextProvider = ({ children,value}) => {
    return <context.Provider value={value}>{children}</context.Provider>
}

export default ContextProvider;
