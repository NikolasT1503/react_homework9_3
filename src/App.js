import React from "react";
import FormExample from "./9-6/FormExample";
import "./App.css";
import CustomBtn from "./CustomBtn";
import FRParentInput from "./FRParentInput";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  focusInput = () => {
    console.log("Input", this.inputRef.current);
    this.inputRef.current.focusInput();
  };

  focusButton = () => {
    console.log("Button", this.buttonRef.current);
    this.buttonRef.current.focus();
  };

  componentDidMount() {
    console.log(this.inputRef.current);
    this.buttonRef.current.focus();
  }

  render() {
    return (
      <div>
        <CustomTextInput ref={this.inputRef} />
        <CustomButton ref={this.buttonRef}>
          <strong>SEND</strong>
        </CustomButton>
        <input type="button" value="Focus Input" onClick={this.focusInput} />
        <input type="button" value="Focus Btn" onClick={this.focusButton} />
      </div>
    );
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    console.log("Child constructor", this.inputRef);
  }

  focusInput = () => {
    console.log("Child", this.inputRef.current);
    this.inputRef.current.focus();
  };

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}

const CustomButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="customBtn">
      {props.children}
    </button>
  );
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.customBtnRef = React.createRef();
  }

  componentDidMount(){
    console.log(this.customBtnRef.current);
    setTimeout(()=>{
      this.customBtnRef.current.changeButtonStatus()
    },1000)
  }
  render() {
    return (
      <div className="App">
        <p>*********Задание 9-3*******</p>
        <Parent />
        <br />
        <CustomBtn ref={this.customBtnRef}>
          <strong>SENDING...</strong>
        </CustomBtn>

        <br />
        <p>*********Задание 9-5 *******</p>
        <FRParentInput />
        <p>*********Задание 9-7 *******</p>
        <FormExample />
      </div>
    );
  }
}

export default App;
