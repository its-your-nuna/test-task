import React from 'react'
import Table from 'react-bootstrap/Table';

export const User = ({currentUser}) => {

  return (
    <>
    {/* show particular user info */}
    <img id='img' src={currentUser.avatar}/>
    <Table striped bordered hover>
    <tbody>
    <tr>
        <th>ID</th>
        <td>{currentUser.id? currentUser.id:'User id'}</td>
      </tr>
      <tr>
        <th> First Name</th>
        <td>{currentUser.first_name? currentUser.first_name:'User name'}</td>
      </tr>
      <tr>
        <th>Last Name</th>
        <td>{currentUser.last_name?currentUser.last_name:'User surname'}</td>
        
      </tr>
      <tr>
        <th>Email</th>
        <td>{currentUser.email?currentUser.email:'User email'}</td>
      </tr>
    
    </tbody>
  </Table>
  </>
  )}
