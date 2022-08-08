import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const AddNewFave = (props) => {

    // const [name, setName] = useState();
    const [addRequest, setAddRequest] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();

        if (addRequest === false) {
            axios.post('http://localhost:1995/pokemon/create', {
                'name': props.name
            })
                .then((res) => {
                    console.log(res);
                    setAddRequest(true);
                })
        } else {
            axios.delete('http://localhost:1995/pokemon/remove/', props.name)
                .then((res) => {
                    console.log(res);
                    setAddRequest(false);
                })
        }
    }

    return (
        <>
            <Button variant={addRequest === false ? 'primary' : 'danger'} className='rounded-circle' onClick={handleClick} ><i className="fa-solid fa-heart"></i></Button>
        </>
    )
};

export default AddNewFave;