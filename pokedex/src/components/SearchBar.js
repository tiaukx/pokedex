const SearchBar = (props) => {
    
    return (
        <div className='container'>
            <div className='row'>
                <section className='col s4 offset-s4'>
                    <form action='' onSubmit={props.handleSubmit} >
                        <div className='input-field'>
                            <label>Name or Number</label><br/>
                            <input type='text' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
};

export default SearchBar;