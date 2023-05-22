import './index.css'

function Search() {
  return (
    <>
      <div className='container search'>
        <div className='flex justify-content-end w-full label-form'>
            <label>Find great places to holiday</label>
          <div className='d-flex justify-content-center mt-2'>
            <input className='form-control'/>
            <button className='btn btn-warning text-white px-4'>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;