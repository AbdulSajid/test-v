import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
     handleClick= () => {
          this.setState(function(prevState) {
              return {isToggleOn: !prevState.isToggleOn};
          });
      }
      
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Bar' : 'Pie'}
        </button>
      );
    }
  }
  

  export default Toggle;

 