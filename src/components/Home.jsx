import React, { useState } from 'react'
import NavScrollExample from './Navbar'
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

export const Home = ({setAutharizedUser,setCurrentUser,email}) => {
  const [users, setUsers] = React.useState([]);
  
  const f = async () => {
    
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
    
  }, []);

  return (
    <>
    
    {users.length &&
          users.map((user) => {
            if(user.email===email){
            return (
              <ListGroup key={user.id} >
                <ListGroup.Item variant='light' className='current_person'>
                <img key={user.avatar} src={user.avatar} />
                <div>
                  <strong>{user.first_name}</strong>
                <p>{user.email}</p>
                <Nav.Link as={Link} onClick={()=>setAutharizedUser(user)} to="/user" eventKey="link-1" style={{color:'hsl(211, 39%, 23%)'}}>Learn more</Nav.Link>
                </div>
                
              </ListGroup.Item>
              </ListGroup>
              
            );
            }
          })}
    
    <h3>Hello ReqRes users!🎶💚</h3>
      <div className="flex">
        {users.length &&
          users.map((user) => {
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
