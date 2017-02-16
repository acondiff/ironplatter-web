import React from 'react';
import { Link } from 'react-router'

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
