import React, { useState } from 'react'
import NavScrollExample from './Navbar'
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

export const Home = ({setCurrentUser,email,user}) => {
  console.log(email)
  return (
    <>
    {/* // get autharized user  */}
    {user.length &&
          user.map((user) => {
            if(user.email===email){
            return (
              <ListGroup key={user.id} >
                <ListGroup.Item variant='light' className='current_person'>
                <img key={user.avatar} src={user.avatar} />
                <div>
                  <strong>{user.first_name}</strong>
                <p>{user.email}</p>
                <Nav.Link as={Link} onClick={()=>setCurrentUser(user)} to="/user" eventKey="link-1" style={{color:'hsl(211, 39%, 23%)'}}>Learn more</Nav.Link>
                </div>
                
              </ListGroup.Item>
              </ListGroup>
              
            );
            }else{
              console.log('all',user.email,'current',email)
            }
          })}
    {/* get list of users */}
    <h3>Hello ReqRes users!</h3>
      <div className="flex">
        {user.length &&
          user.map((user) => {
            return (
              <ListGroup key={user.id} >
                <ListGroup.Item variant='light' className='person'>
                <img key={user.avatar} src={user.avatar} />
                <div>
                  <strong>{user.first_name}</strong>
                <p>{user.email}</p>
                <Nav.Link as={Link} onClick={()=>setCurrentUser(user)} to="/user" eventKey="link-1" style={{color:'hsl(211, 39%, 23%)'}}>Learn more</Nav.Link>
                </div>
                
              </ListGroup.Item>
              </ListGroup>
              
            );
          })}
        </div>
        
    </>
  )
}
