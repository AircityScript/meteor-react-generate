import React from 'react';

import AppBar from '../component/appBar';
import RaisedButton from '../component/raisedButton';

const Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div>
        <AppBar/>
        <h1>Home</h1>
        <div><a href="/page">Some page</a></div>
      </div>

    );
  }
});

export default Home;
