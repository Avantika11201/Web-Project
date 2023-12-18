import { createContext, useState } from 'react';

export const store = createContext({
    input1: '',
    input3: '',
    setInputs: (data) => {},    
});

export const StoreProvider = ({ children }) => {
    const [inputData, setInputData] = useState({
        input1: '',
        input3: '',
    });

    const setInputs = (data) => {
        setInputData({...inputData, ...data});
    };

    return (
        <store.Provider value={{ ...inputData, setInputs }}>
            {children}
        </store.Provider>
    );
}; 