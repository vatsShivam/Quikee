





import React, { PureComponent } from "react";
import axios from 'axios'; 

import { Card, CardBody, Col, Button, ButtonToolbar,Input } from 'reactstrap'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import { Link } from "react-router-dom";

class ViewCoupon extends PureComponent {
  state = {
    response: [],
    
  };
  componentDidMount() {
    axios
      .get(
        "/lists",
      
      )
      .then((resp) => {
        console.log(resp.data)
       
        this.setState({response:resp.data})
      
      })
      .catch((error) => {
     
        console.log(error);
      });
  }
  toggle = (event,id) => {
    
   
    console.log(id);

  
    axios
    
    .post(
    
      "/delete",
      {
        did:id
      }
    

    )
    .then((resp) => {
     
     console.log(resp)
     window.location.reload();

    })

    .catch((error) => {
      console.log(error);
    });
  
  }
  
  renderTableData() {
    const Shivam = this.state.response;
    
    return Shivam.map((student) => {
      const {
       id,
       name
      } = student; //destructu
    
    
      return (
        <Tr>
          <Td class="pt-3-half" >
            {id}
          </Td>
          <Td class="pt-3-half" >
            {name}
          </Td>
          <Td class="pt-3-half" >
          <Link to={"/edit/" + id}>
              <button
                type="button"
                class="btn btn-primary btn-rounded btn-sm my-0"
              >
                Edit
              </button>
            </Link>
          </Td>
          <Td class="pt-3-half" contenteditable="true">
              <button
                type="button"
                class="btn btn-primary btn-rounded btn-sm my-0"
                onClick = {event => this.toggle(event,id)}
              >
                Delete
              </button>
              </Td>
        
          
         
        </Tr>
      );
    });
  }
  render() {
   
    return (
    

<div className="">
  
<CardBody style = {{margin : '0px',padding : '0px'}}>
 
    
    <div className="card" style = {{width : '100%'}}>
      {/* <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Editable table</h3> */}
      <div className="card-body" style = {{margin : '0px',padding : '0px'}}>
        <div id="table" className="table-editable" >
          <h3 style={{textAlign:"center",marginTop:'30px',fontWeight:'bold'}}>List of uploaded files</h3>
          <span className="table-add float-right mb-3 mr-2" >
            <Link to={'/add'}  className="text-success"><i style = {{marginLeft : '20%'}} className="fas fa-plus fa-2x" aria-hidden="false"></i><p style = {{marginRight : '2vw'}}>Add New</p></Link></span>
            <span className="table-add float-right mb-3 mr-2" >
            <Link to={'/statics'}  className="text-success"><i style = {{marginLeft : '20%'}} className="fas fa-plus fa-2x" aria-hidden="false"></i><p style = {{marginRight : '2vw'}}>View Statics</p></Link></span>
          <Table className="table table-bordered table-responsive-md table-striped text-center">
            <Thead>
              <Tr>
                <Th className="text-center">Id</Th>
                <Th className="text-center">Uploaded Files</Th>
                <Th className="text-center">Edit</Th>
                <Th className="text-center">Delete</Th>
               
              
              </Tr>
            </Thead>
            <Tbody>
          
          {this.renderTableData()}
              
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  
</CardBody>
</div>
    );
  }
}

export default ViewCoupon;