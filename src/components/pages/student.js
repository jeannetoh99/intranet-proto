import React from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';
import StudentHeader from '../headerComponent/studentheader'

class Student extends React.Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token == null) {
      loggedIn = false
    }
    this.state={
      loggedIn
    }
  }
  render() {
    if(this.state.loggedIn === false) {
      return <Redirect to='/'/>
    }
    return(
      <div>
        <StudentHeader/>
        <p>Functions are not enabled now. Please hold on for the latest build</p>
      </div>
    )
  }
}

export default Student;
