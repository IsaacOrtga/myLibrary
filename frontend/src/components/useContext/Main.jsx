import { useState } from 'react';
import AppRoutes from '../../routes/AppRoutes'
import { CounterProvider } from './CounterContext';
import { UserProvider } from './UserContext';

function Main () {
    const [startIn, setStartIn] = useState(0);
  return (
  <UserProvider >
    <CounterProvider value={{
        startIn,
        setStartIn,
    }}>
   <AppRoutes />
   </CounterProvider>  
   </UserProvider>
  )
}

export default Main;