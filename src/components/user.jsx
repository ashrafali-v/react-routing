import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const User = (props) => {
    return(
        <React.Fragment>
                  <tr>
                    <td>
                      <Link to={`/users/${props.id}`}>{props.name}</Link>
                    </td>
                    <td key={props.id}>
                      {props.age}
                    </td>
                    <td>
                      <button variant="primary" onClick={()=>props.openModal(props)}>Edit</button>
                      <button variant="primary">Delete</button>
                    </td>
                  </tr>
        </React.Fragment>
    );
}
export default User;