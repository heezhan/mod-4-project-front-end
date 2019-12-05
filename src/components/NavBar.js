import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">

        <Link to="/">
          <a class="item">
            Home 
          </a>
        </Link>

        <Link to="/routines">
          <a class="item">
            My Routines
          </a>
        </Link>

        <div className="right menu">
          <a class="item">
            Logout
          </a>
        </div>

      </div>
    )
  }
}

export default NavBar 