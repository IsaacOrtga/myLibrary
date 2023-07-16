import { useState } from 'react';
import AppRoutes from '../../routes/AppRoutes'
import { CounterContext } from './CounterContext';

function Main () {
    const [startIn, setStartIn] = useState(0);
  return (
    <CounterContext.Provider value={{
        startIn,
        setStartIn
    }}>
   <AppRoutes />
   </CounterContext.Provider>
  )
}

export default Main;