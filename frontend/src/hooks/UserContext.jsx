import { createContext, useState } from "react";

const UserContext = createContext();

const useProvider = ({children}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const insertName = (value) => {
        setName(value);
    };
    const insertEmail = (value) => {
        setEmail(value);
    };

    const dataUser = {
        name,
        email,
        insertName,
        insertEmail,
    };

    return <UserContext.Provider value={dataUser}>{children}</UserContext.Provider>
    
};

export {UserContext, useProvider};