import React, { Component } from 'react';
import './App.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { observer , inject } from 'mobx-react'
@inject('store')
@observer
class App extends Component {
  
  render() {
    console.log(this.props);
    const store = this.props.store;
    return (
      <div className="App">
        <PrimaryButton onClick={store.adds}>Add</PrimaryButton>
        {store.numbers}
      </div>
    );
  }
}

export default App;
