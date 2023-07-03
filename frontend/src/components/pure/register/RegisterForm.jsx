import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

function RegisterForm () {
  const [ password, setPassword ] = useState('');
  const [secondPassword, setSecondPassword ] = useState('');
  const navigate = useNavigate();
  const showPassword = (e) => {
    setPassword(e.target.value);
  }
  const showSecondPassword = (e) => {
    setSecondPassword(e.target.value);
  }
  const watchSamePasswords = (e) => {
    e.preventDefault();
  
    if(password === secondPassword){
      navigate('/');
      
  }else{
    console.log('No coinciden')
  }
}

  return (
    <div className='loginContent'>
        <form onSubmit={''} className='formLogin'>
            <label>Nombre</label>
            <input type='text' placeholder='Clara'></input>
            <label>E-mail</label>
            <input type='email' placeholder='clara@gmail.com'></input>
            <label>Contraseña</label>
            <input onChange={showPassword} value={password} type='password' placeholder='Al menos cinco caractéres y un número' pattern='(?=.*\d)(?=.*[a-zA-Z]).{5,}' title='Ha de tener al menos cinco letras y un número'></input>
            <label>Repetir Contraseña</label>
            <input onChange={showSecondPassword} value={secondPassword} type='password' placeholder='Las dos contraseñas han de coincidir'></input>
            <button onClick={watchSamePasswords} type="submit" className="buttonReg">
            Registrarse
          </button>
        </form>
    </div>
  )
}
export default RegisterForm;