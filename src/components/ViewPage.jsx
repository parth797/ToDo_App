import '../css/ViewPage.css'
import {Row,Col,ButtonGroup,Button,Form,Dropdown,Table} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

const ViewPage=({list,setList,user})=> {

const navigate=useNavigate();



const handleNewPage=()=>{
    navigate("/newPage");
}

const handleEditPage=()=>{
    navigate("/editPage")
}

const handleDeletePage=()=>{
    navigate("/deletePage")
}


  return (
    <>
    
    
      <Row className='border p-2' id='header'>
        <Col className='text-start'>
        <h3>Tasks</h3>
        <p className="text-secondary">All Tasks</p>
        </Col>
        <Col  xs lg ="3" className='text-end'>
        <ButtonGroup aria-label="Basic example">
     <Link></Link>
     <Button className='border text-white' variant="warning" onClick={handleNewPage}>New Task</Button>
      <Button className='border text-white' variant="warning">Refresh</Button>
    </ButtonGroup>
    <Form.Control type="text" className='my-2' placeholder="Search" />
        </Col>
      </Row>

     <Row className='table-responsive '>
        <table className="table table-hover border ">
          <thead >
            <tr >
             
              <th><input type="checkbox" /></th>
              <th className="text-secondary">Assigned To</th>
              <th className="text-secondary">Status</th>
              <th className="text-secondary">Due Date</th>
              <th className="text-secondary">Priority</th>
              <th className="text-secondary">Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="text-primary">User 1</td>
              <td>Completed</td>
              <td>12/10/2024</td>
              <td>Low</td>
              <td>
                This task is good
              </td>
              <td>
              <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={handleEditPage} >Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={handleDeletePage} >Delete</Dropdown.Item>     
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>
        
        </Row>
      
      <div className='row'>
      <ul className="pagination justify-content-end">
    <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
    <li className="page-item"><a className="page-link" href="javascript:void(0);">1</a></li>
    <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
    <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
  </ul>
      </div>


    

     
    </>
  );
}
export default ViewPage;
