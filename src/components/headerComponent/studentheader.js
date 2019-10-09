import React from 'react';
import './studentheader.css';
import {
  Link
} from 'react-router-dom';

function StudentHeader() {
  return (
    <div classname='studentheader'>
      <h1 className='hallname2'> Welcome Student </h1>
      <nav className='nav1'>
        <ul  className='firstName'>
          <li>
            <Link className='log1' to='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>
      <br/>
    </div>
  );
}

export default StudentHeader;
