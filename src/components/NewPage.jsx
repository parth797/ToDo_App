import "../css/ViewPage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
// import {v4 as uuidv4} from 'uuid';


const NewPage=({user,setUser,list,setList})=>{


    const handleUser=(e)=>{
        setUser(e.target.value)
        
    }

    // const handleForm=(e)=>{
    //   setList([...list,user])
    // }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setList([...list, {title:user, completed:false}]);
       setUser('');
    }

  return (
    <>
    <Form  onSubmit={handleSubmit}>
      <Row className="row text-secondary border p-2">
        <Col>
          <h3>New Task</h3>
        </Col>
      </Row>
      <Row className="border">
        <Row className="row  p-2 text-start">
          <Col>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" value={user} onChange={handleUser} required/>
          </Col>
          <Col>
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" required/>
          </Col>
        </Row>
        <Row className="text-start">
          <Col>
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" required/>
          </Col>
          <Col>
            <Form.Label>Prority</Form.Label>
            <Form.Control type="text" required/>
          </Col>
        </Row>
        <Row className="row text-start p-2">
          <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} required/>
          </Col>
        </Row>
      </Row>
      <Row className="text-end border" id="header">
        {/* <Col></Col> */}
        <Col>
          <Button className="m-3" variant="warning">
            cancel
          </Button>
          <Button type="submit" className=" m-3" variant="secondary">
            save
          </Button>
        </Col>
      </Row>
      </Form>
    </>
  );
}
export default NewPage;
