import { Button, Navbar } from "react-bootstrap";

const GenFilter = (props) => {

    return (
        <>
        <Navbar className='justify-content-center'>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(1, 151)} >Gen 1</Button>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(152, 251)} >Gen 2</Button>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(252, 386)} >Gen 3</Button>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(387, 493)} >Gen 4</Button>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(494, 649)} >Gen 5</Button>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(650, 721)} >Gen 6</Button>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(722, 809)} >Gen 7</Button>
            <Button className='genButton' variant="danger" onClick={() => props.updateGen(810, 898)} >Gen 8</Button>
            
            {
                props.id.startId !== 1 || props.id.endId !== 898 
                ? <Button className='genButton' variant="danger" onClick={() => props.updateGen(1, 898)} >X</Button>
                : <></> 
            }
            
        </Navbar>
        </>
    )
};

export default GenFilter;