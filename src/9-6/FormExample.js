import React from "react";

class FormExample extends React.Component {
  state = {
    text1: "",
    text2: "",
    textarea: "",
    select: "",
    select2: [],
    checkbox: false,
    radio: "",
  };

  ref1 = React.createRef();

  handleChange = (e) => {
    let { name, value, type, selectedOptions, checked } = e.target;
    if (type === "select-multiple") {
      value = [...selectedOptions].map((o) => o.value);
    }
    if (type === "checkbox") {
      value = checked;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.ref1.current.value);
  };

  render() {
    const { text1, text2, textarea, select, select2, checkbox, radio } =
      this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="input1">Неконтр элемент </label>
        <input id="input1" ref={this.ref1} defaultValue="Значение по умолчанию" />
        <br/>
        <label htmlFor="input2">Пример label </label>
        <input
          id="input2"
          name="text1"
          value={text1}
          onChange={this.handleChange}
        />
        <br/>
        <input name="text2" value={text2} onChange={this.handleChange} />
        <br/>
        <textarea
          name="textarea"
          value={textarea}
          onChange={this.handleChange}
        />
        <br/>
        <select name="select" value={select} onChange={this.handleChange}>
          <option value="1">Значение 1</option>
          <option value="2">Значение 2</option>
          <option value="3">Значение 3</option>
          <option value="4">Значение 4</option>
          <option value="5">Значение 5</option>
        </select>
        <br/>
        <select
          name="select2"
          multiple={true}
          value={select2}
          onChange={this.handleChange}
        >
          <option value="1">Значение 1</option>
          <option value="2">Значение 2</option>
          <option value="3">Значение 3</option>
          <option value="4">Значение 4</option>
          <option value="5">Значение 5</option>
        </select>
        <br/>
        <input
          type="checkbox"
          name="checkbox"
          checked={checkbox}
          onChange={this.handleChange}
        />
        <br/>
        <input
          type="radio"
          name="radio"
          value={1}
          checked={radio === "1"}
          onChange={this.handleChange}
        />
        <br/>
        <input
          type="radio"
          name="radio"
          value={2}
          checked={radio === "2"}
          onChange={this.handleChange}
        />
        <br/>
        <button>Отправить</button>
      </form>
    );
  }

  componentDidUpdate() {
    console.log(this.state);
  }
}

export default FormExample;
