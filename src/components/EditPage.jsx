import "../css/ViewPage.css"
import {Row,Col,Form,Button} from 'react-bootstrap'
function EditPage(){
    return(
        <>
            <Row className='row text-secondary border p-2'>
                <Col>
                <h3>Edit Task</h3>
                </Col>
            </Row>
            <Row className='border'>
            <Row className='row  p-2 text-start'>
                <Col >
                <Form.Label>Assigned To</Form.Label>
                <Form.Control type="text" />
                </Col>
                <Col>
                <Form.Label>Status</Form.Label>
                <Form.Control type="text"  />
                </Col>
                </Row>
                <Row className='text-start'>
                <Col>
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
                </Col>
                <Col>
                <Form.Label>Prority</Form.Label>
                <Form.Control type="text"  />
                </Col>
            </Row>
            <Row className='row text-start p-2'>
            <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
                </Col>
            </Row>
            </Row>
            <Row className='text-end border' id="header">
                {/* <Col></Col> */}
                <Col > 
                <Button className='m-3' variant="warning">cancel</Button>
                <Button className=' m-3' variant="secondary">save</Button>
                </Col>
            
            </Row>
            
                
            
        </>
    );
}
export default  EditPage;