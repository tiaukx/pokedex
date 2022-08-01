const SearchBar = (props) => {

    return (
        <div className='container'>
            <div className='row'>
                    <form action='' onSubmit={props.handleSubmit} >
                        <div className='input-field'>
                            <label>Name or Number</label><br/>
                            <input type='text' onChange={props.handleChange}/>
                            <i className="fa-solid fa-magnifying-glass" onClick={props.handleSubmit}></i>
                        </div>
                    </form>
            </div>
        </div>
    )
};

export default SearchBar;