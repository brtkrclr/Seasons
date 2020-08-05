import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {      //good place to do data loading!
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {       //good place to do more data loading when state/props change
    console.log("my comp was just updated it rerendered")
  }

  //lifecycle methods if the thing did mount or update



  // React says we have to define render!!
  render() {

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please accept location request!"/>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
