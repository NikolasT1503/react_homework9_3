import logProps from "./LogProps";
import React from 'react';

class CustomBtn extends React.Component {
    constructor(props) {
      super(props);
      this.ref = React.createRef();
    }
  
    changeButtonStatus = _ => this.ref.current.innerText = "SENT";
    
    render() {
      return (
        <button ref={this.ref} className="customBtn">
          {this.props.children}
        </button>
      );
    }
  }

  //export default logProps(CustomBtn);
  export default CustomBtn;