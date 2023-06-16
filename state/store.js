import React, { createContext, useReducer, useContext, useEffect } from 'react';

import { reducer } from './reducer';

let initialState = {};

const StoreContext = createContext(initialState);

const StateProvider = (props) => {
    const initialData = props.serviceData;
    const [state, dispatch] = useReducer(reducer, { ...initialState, ...initialData });

    useEffect(() => {
        dispatch({ type: 'SET_DATA', payload: initialData });
    }, [initialData]);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
};

const useGlobalState = () => {
    const { state, dispatch } = useContext(StoreContext);
    return { state, dispatch };
}

export { StoreContext as store, StateProvider, useGlobalState }
