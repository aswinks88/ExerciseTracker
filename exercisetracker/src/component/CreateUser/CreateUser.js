import React, {Component} from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    constructor(props){
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        // this.deleteUsers = this.deleteUsers.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            users: []
        };
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
 
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
      onSubmit(e) {
        e.preventDefault();
        const newUser = {
          username: this.state.username,
        };
        console.log(newUser);
        
        axios.post('http://localhost:5000/users/add', newUser)
        .then(res => console.log(res.data))

        this.setState({
          username: ''
        })
        window.location.reload('/user')
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
    render(){
        return(
            <div>
  <h3>Create New User</h3>
  <form onSubmit={this.onSubmit}>
    <div className="form-group"> 
      <label>Username: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.username}
          onChange={this.onChangeUsername}
          />
    </div>
    <div className="form-group">
      <input type="submit" value="Create User" className="btn btn-primary" />
    </div>
    
  </form>
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
</div>
        )
    }
}