import { createContext } from "react";

export const Context = createContext();

import PropTypes from "prop-types";
import run from "../config/gemini";

const ContextProvider = (props) => {
    
    const onSent = async (prompt) =>{
        await run(prompt)
    }

    onSent("what is react?")
    
    const contextValue = {};

    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextProvider;
