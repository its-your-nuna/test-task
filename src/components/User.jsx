import React from 'react'
import Table from 'react-bootstrap/Table';

export const User = ({currentUser,autharizedUser}) => {
  if(currentUser){
  return (
    <>
    <img id='img' src={currentUser.avatar}/>
    <Table striped bordered hover>
    <tbody>
    <tr>
        <th>ID</th>
        <td>{currentUser.id}</td>
      </tr>
      <tr>
        <th> First Name</th>
        <td>{currentUser.first_name}</td>
      </tr>
      <tr>
        <th>Last Name</th>
        <td>{currentUser.last_name}</td>
        
      </tr>
      <tr>
        <th>Email</th>
        <td>{currentUser.email}</td>
      </tr>
    
    </tbody>
  </Table>
  </>
  )}
  return (
    <>
    <img id='img' src={autharizedUser.avatar}/>
    <Table striped bordered hover>
    <tbody>
    <tr>
        <th>ID</th>
        <td>{autharizedUser.id}</td>
      </tr>
      <tr>
        <th> First Name</th>
        <td>{autharizedUser.first_name}</td>
      </tr>
      <tr>
        <th>Last Name</th>
        <td>{autharizedUser.last_name}</td>
        
      </tr>
      <tr>
        <th>Email</th>
        <td>{autharizedUser.email}</td>
      </tr>
    
    </tbody>
  </Table>
  </>
  )
}
