import React, { useReducer } from "react";

//A generic function used to add any resource to the app that we need to add, delete or modify
export default (reducer, actions, initialState) => {

    const Context = React.createContext()

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, initialState)

        //We loop through the actions parameter until we find the correct action
        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        //Then we pass the found actions (based on the key) down.
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
}