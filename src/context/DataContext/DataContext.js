import React from "react";

const DataContext = React.createContext([]);

const DataProvider = ({children}) => {

        
    return <DataContext.Provider value={{
    }}>
        {children}
    </DataContext.Provider>
}

export {DataProvider, DataContext};