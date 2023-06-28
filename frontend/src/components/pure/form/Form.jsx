import './form.css';

function Form () {
  return (
    <div className='formContent'>
        <form className='form'>
        <label>Autor o título:</label>
            <input type="text" name="searcher" id="searcherInput" placeholder='El tambor de hojalata'/>
            <button className='button'>Buscar</button>
        </form>
    </div>
  )
}

export default Form