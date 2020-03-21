import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
export class UserList extends Component {
    constructor(props){
      super(props)
      this.state ={
        users: []
      }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then(response => {
          this.setState({
            users: response.data
          })
          console.log(this.state.users)
        }).catch(err => {
          console.log(err)
        })
      }
      deleteUsers(id){
        axios.delete('http://localhost:5000/users/' + id )
        .then(res => console.log(res.data))
         this.setState({
           users: this.state.users.filter(ul => ul._id !== id)
         })
        }
        userList(){
         return this.state.users.map(userls => {
           return (<tr>
           <td>{userls.username}</td>
           <td key={userls._id}><button className='btn btn-danger' onClick={this.deleteUsers.bind(this, userls._id)}>Delete</button></td>
         </tr>)
         })
        }
    render() {
        return (
    <div>
      <h3>User List</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {this.userList()}
        </tbody>
      </table>
    </div>
        )
    }
}

export default UserList
