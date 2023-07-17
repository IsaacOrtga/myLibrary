import { useState } from 'react';
import AppRoutes from '../../routes/AppRoutes'
import { CounterContext } from './CounterContext';
import { UserProvider } from './UserContext';

function Main () {
    const [startIn, setStartIn] = useState(0);
  return (
    <CounterContext.Provider value={{
        startIn,
        setStartIn,
    }}>
    <UserProvider>
   <AppRoutes />
   </UserProvider>
   </CounterContext.Provider>
  )
}

export default Main;