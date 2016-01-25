import React from 'react';
import TextField from 'material-ui/lib/text-field';
import AutoComplete from 'material-ui/lib/auto-complete';

const Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div>
        <div>
          <h1>Home</h1>
          <div><a href="/page">Some page</a></div>
        </div>
        <br/>
        <div className="clearfix">
          <TextField
            hintText="The hint text can be as long as you want, it will wrap."
            multiLine={true} />
        </div>
      </div>

    );
  }
});

export default Home;
