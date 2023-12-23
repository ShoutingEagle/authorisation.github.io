import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName : '',
       password : ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    console.log(e.target.value);
    console.log(this.state);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const {userName,password} = this.state;
    return (
      <div className='login'>
        <div className='text'>Login</div>
        <form className='form'> 
            <div className='userName-login'>

                <div>
                  <label name='userName'>Username</label>
                  <br/>
                  <input type='text' name='userName' value={userName} onChange={this.handleChange}/>
                </div>
                <div>
                  <label>Password</label>
                  <br/>
                  <input type='password' name='password' value={password} onChange={this.handleChange}/>
                </div>
                
    
            </div>   
            <button onClick={this.handleClick}>Submit</button>                                               
        </form>
      </div>
    )
  }
}

export default Login