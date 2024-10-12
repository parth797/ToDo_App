import { Row,Col,Button } from "react-bootstrap";
function DeletePage(){
    return(
        <>
             <Row className='row text-bg-danger border p-2'>
                <Col>
                <h3>Delete Task</h3>
                </Col>
            </Row>
            <Row className="border">
                <Row>
                <Col className="text-start">
                    <p className="p-3">Do you want to delete task</p>
                    
                </Col>
                </Row>
                
            
            <Row>
            <Col className="text-end"> 
                <Button className='px-4 mb-3' variant="success">No</Button>
                <Button className='mx-3 mb-3 px-4' variant="warning">Yes</Button>
                </Col>
            </Row>
            </Row>
        </>
    );
}
export default DeletePage;