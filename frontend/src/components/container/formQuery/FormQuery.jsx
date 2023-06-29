import {useState} from 'react';
import './form.css';
import ApiQuery from '../apiquery/ApiQuery';
import Results from '../../pure/results/Results';

function FormQuery () {
  const [inputValues, setInputValues] = useState({
    author: '',
    title: '',
    query: ''
  });
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { author, title, query } = inputValues;
    console.log([author, title, query])
    setButtonClicked(true);
  }
  const handleValue = (e) => {
    setInputValues({
      ...inputValues,
    [e.target.name]: e.target.value
    });
  }
  return (
    <div className='formContent'>
        <form onSubmit={handleSubmit} className='form'>
        <label>Autor o título:</label>
            <input onChange={handleValue} type="text" name="author" placeholder='Günter Grass'/>
            <input onChange={handleValue} type="text" name="title" placeholder='El tambor de hojalata'/>
            <input onChange={handleValue} type="text" name="query" placeholder='Historia de España'/>
            <button type='submit' className='button'>Buscar</button>
        </form>
        {buttonClicked && (
          <>
        <ApiQuery inputValues={inputValues}>
          {(booksData, noData) => (
            <Results booksData={booksData} noData={noData} />
          )}
        </ApiQuery>
        </>
      )}
    </div>
  )
}

export default FormQuery;