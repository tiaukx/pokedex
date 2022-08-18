import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const AddNewFave = (props) => {

    const [faves, setFaves] = useState([]);
    // const [dbId, setDbId] = useState('');

    //Gets the data of all pokemon currently logged as favourites
    useEffect(() => {
        axios.get('http://localhost:1995/pokemon/readAll')
            .then(res => setFaves(res.data))
            .catch(err => console.error(err));
    }, []);

    const inFaves = faves.find(element => element.pokedexId === props.id)

    const handleClick = (e) => {
        e.preventDefault();

        if (!inFaves) {
            axios.post('http://localhost:1995/pokemon/create', {
                'name': props.name,
                'pokedexId': props.id
            })
                .then((res) => {
                    console.log(res);
                })
                .catch(err => console.error(err))
        } else {

            const dbId = inFaves._id;
            
            axios.delete('http://localhost:1995/pokemon/remove/' + dbId)
                .then((res) => {
                    console.log(res);
                })
                .catch(err => console.error(err))
        }
        
    }

    return (
        <>
            <Button variant={!inFaves ? 'primary' : 'danger'} className='rounded-circle' onClick={handleClick} ><i className="fa-solid fa-heart"></i></Button>
        </>
    )
};

export default AddNewFave;