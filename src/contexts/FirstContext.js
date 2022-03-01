import { createContext, useState } from 'react';

export const FirstContext = createContext();

const FirstContextProvider = () => {
    const [precipValue, setPrecipValue] = useState([20, 10, 0, 40, 0, 0, 15]);
  return (
    <FirstContextProvider />
  )
}

export default FirstContextProvider

