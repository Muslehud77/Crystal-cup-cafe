import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthContext';

const useContextData = () => {

    const data = useContext(AuthContext)

    return data
};

export default useContextData;