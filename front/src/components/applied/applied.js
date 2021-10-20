import { useState } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse,
    Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import applyServices, {deleteApplied} from '../../services/apply.services'
import "./applied.css"
  

const AppliedCard = (props) => {
    
    const [open, setopen] = useState(false);

    const changeIsOpen = () => { 
        open ? setopen(false) : setopen(true)
    }

    const deleteItem = () => {
       applyServices.deleteApplied(props.obj.id)
       .then(()=>{
         window.location.reload();
       })
    }
     
    return <Card className="carditem">
    <CardBody>
          	<CardTitle tag="h5">{props.obj.title}</CardTitle>
            <CardSubtitle> {props.obj.contrat_type}</CardSubtitle>
          	<Button className="seeMore" onClick={changeIsOpen}>Learn more...</Button>
            <Collapse isOpen={open}>            
                {open ? props.obj.motivation: ""}
                <p>{props.obj.description}</p>
                <ul> 
                <li>{props.obj.name}</li>
                <li>{props.obj.activities}</li>
                <li>{props.obj.city}</li>
                </ul>
                <Button color="danger" onClick={deleteItem}>Delete</Button>
            </Collapse>
        </CardBody>
      </Card>
}

export default AppliedCard;