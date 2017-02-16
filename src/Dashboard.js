import React from 'react';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div><h1>Dashboard</h1></div>
    );
  }
}
export default Dashboard;
