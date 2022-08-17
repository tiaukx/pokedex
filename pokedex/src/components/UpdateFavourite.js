import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const AddNewFave = (props) => {

    const [addRequest, setAddRequest] = useState(false);
    const [faves, setFaves] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
        axios.get('http://localhost:1995/pokemon/readAll')
            .then(res => setFaves(res.data))
            .catch(err => console.error(err));
    }, []);

    const getID = (name) => {
        for (let i = 0; i < faves.length; i++) {
            if (name === faves[i].name) {
                setAddRequest(true);
                setId(faves[i]._id);
            }
        }
    }

    if (!addRequest) {
        getID(props.name);
    }

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
            axios.delete('http://localhost:1995/pokemon/remove/' + id)
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