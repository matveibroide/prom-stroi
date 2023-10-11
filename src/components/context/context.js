import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    
const [context, setContext] = useState('dark');




const toggleContext = () => {
setContext(context === 'dark' ? 'light' : 'dark');
};

return (
<ThemeContext.Provider value={{ context, toggleContext }}>
    {children}
</ThemeContext.Provider>
);
}

export { ThemeContext, ThemeContextProvider };
