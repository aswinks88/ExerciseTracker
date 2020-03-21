import React, {Component} from 'react'
import axios from 'axios'
import UserList from '../UserList/UserList'
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
  <UserList/>
</div>
        )
    }
}