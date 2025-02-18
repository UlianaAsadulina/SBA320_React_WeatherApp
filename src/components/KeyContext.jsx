import { createContext, useContext } from "react";

const KeyContext = createContext();

export const KeyProvider = ({ children }) => {
    const key = import.meta.env.VITE_API_KEY; // Access environment variable

    return (
        <KeyContext.Provider value={{ key }}>
            {children}
        </KeyContext.Provider>
    );
};

export const useKey = () => useContext(KeyContext);