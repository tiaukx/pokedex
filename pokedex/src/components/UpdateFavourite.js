import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const AddNewFave = (props) => {

    const [addRequest, setAddRequest] = useState(false);
    const [faves, setFaves] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:1995/pokemon/readAll')
            .then(res => setFaves(res.data))
            .then(() => {
                for (let i of faves) {
                    if (i.name === props.name) {
                        setAddRequest(true)
                    }
                }
            })
            .catch(err => console.error(err));
    }, [props.name, faves]);

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
                .catch(err => console.error(err))
        } else {
            axios.delete('http://localhost:1995/pokemon/remove/', props.name)
                .then((res) => {
                    console.log(res);
                    setAddRequest(false);
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <>
            <Button variant={addRequest === false ? 'primary' : 'danger'} className='rounded-circle' onClick={handleClick} ><i className="fa-solid fa-heart"></i></Button>
        </>
    )
};

export default AddNewFave;