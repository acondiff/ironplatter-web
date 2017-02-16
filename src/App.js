import React from 'react';
import NavBar from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>My app</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default App;
