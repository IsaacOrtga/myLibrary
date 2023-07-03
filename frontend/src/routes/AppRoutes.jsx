import { Routes, Route } from 'react-router-dom';
import Home from '../components/pure/pages/Home';
import Register from '../components/pure/pages/Register'

function AppRoutes () {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/register' element={<Register />}/>
    </Routes>

  )
}
export default AppRoutes;
