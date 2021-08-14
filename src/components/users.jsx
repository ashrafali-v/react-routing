import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import User from './user';
import '../App.css';

function Users() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [users, setUsers] = useState([]);
  /*------ FEtch Dat from API -------*/
    // const fetchItems = async () => {
    //   const data = await fetch('http://localhost:3027/api/user');
    //   const items = await data.json();
    //   setItems(items);
    //   console.log(items);
    // }
   /*------ FEtch Dat from API -------*/
  const fetchItems = async () => {
    const users = [
      {"id":"1","name":"Bob","age":40},
      {"id":"2","name":"Martyn","age":30},
      {"id":"3","name":"Peter","age":45},
      {"id":"4","name":"Derek","age":32},
      {"id":"5","name":"Lydia","age":23},
      {"id":"6","name":"Stiles","age":24},
      {"id":"7","name":"Scot","age":24},
    ];
    setUsers(users);
    console.log(users);

  }
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState();
  const [addStatus, setAddStatus] = useState(false);
  const updateName = e => {
    setName(e.target.value)
  }
  const updateAge = e => {
      setAge(e.target.value)
  }

  function handleShowEdit(item){
    setAddStatus(false);
    console.log(users.length);
    console.log(item.id);
    setName(item.name);
    setAge(item.age);
    setId(item.id);
    setShow(true)
  };
  function handleShowAdd(){
    setAddStatus(true);
    setName('');
    setAge('');
    setShow(true)
  };
  const handleClose = () => setShow(false);
  const saveUser = (event,action) => {
    event.preventDefault();
    console.log(action);
    setShow(false);
    if(action == 'edit'){
      setUsers(prevUsers => [...prevUsers.map((user)=>{
        if(user.id === id){
          return {
            ...user,
            name:name,
            age:age
          }
        }else{
          return user;
        }
      })]);
    }else{
      setUsers(prevUsers => [...prevUsers, { id:users.length + 1,name: name, age: age }]);
    }
  }

  return (
    <div>
      {
      <>
        <table className="table" style={{width:500+'px'}}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
              users.map(item => (
                <User name={item.name} age={item.age} id={item.id} key={item.id} openModal={handleShowEdit}></User>
              ))
            }
        </tbody>
        </table>
        <Modal show={show}>
          <Modal.Header closeButton>
            <Modal.Title>Login Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(event) => addStatus?saveUser(event, "add"):saveUser(event, "edit")}>
              <input type="text" name="name" value={name} onChange={updateName}></input>
              <input type="text" name="age" value={age} onChange={updateAge}></input>
              <button>Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
          </Modal.Footer>
        </Modal>
      </>
      }
      <button onClick={handleShowAdd}>Add User</button>
    </div>
  );
}

export default Users;
