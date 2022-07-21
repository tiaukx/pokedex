import { Button, Navbar } from "react-bootstrap";
import { useState } from "react";

const GenFilter = (props) => {

    const [id, setId] = useState({
        startId: 1,
        endId: 898,
    })

    function updateGen(start, end) {
        setId({ startId: start, endId: end })
    }

    return (
        <Navbar className='justify-content-center'>
            <Button className='genButton' variant="danger" onClick={() => updateGen(1, 151)} >Gen 1</Button>
            <Button className='genButton' variant="danger" onClick={() => updateGen(152, 251)} >Gen 2</Button>
            <Button className='genButton' variant="danger" onClick={() => updateGen(252, 386)} >Gen 3</Button>
            <Button className='genButton' variant="danger" onClick={() => updateGen(387, 493)} >Gen 4</Button>
            <Button className='genButton' variant="danger" onClick={() => updateGen(494, 649)} >Gen 5</Button>
            <Button className='genButton' variant="danger" onClick={() => updateGen(650, 721)} >Gen 6</Button>
            <Button className='genButton' variant="danger" onClick={() => updateGen(722, 809)} >Gen 7</Button>
            <Button className='genButton' variant="danger" onClick={() => updateGen(810, 898)} >Gen 8</Button>
        </Navbar>
    )
};

export default GenFilter;