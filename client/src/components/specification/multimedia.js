import React from "react";

class DesignForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = e => {
    const value = e.target.type === "text" ? e.target.value : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  fileSelectedHandle = e => {};
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      price: this.state.price,
      files: this.state.selectedFiles
    };
    console.log(formData);
  };
  render() {
    return (
      <div>
        <h2>Design</h2>
        <form>
          <div>
            <label>Height of product:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>Weight:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>Thickness:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>width:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>color:</label>
            <select>
              <option>red</option>
              <option>black</option>
              <option>white</option>
            </select>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default DesignForm;
