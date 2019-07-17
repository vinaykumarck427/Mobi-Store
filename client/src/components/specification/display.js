import React from "react";

class DisplayForm extends React.Component {
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
        <h2>Display</h2>
        <form>
          <div>
            <label>Screensize:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>Screen Resolution:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>aspect ratio:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>pixel density:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>display Type:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="touch">touch screen:</label>
            <input to="touch" type="checkbox" />
          </div>
          <div>
            <label htmlFor="dtype">type:</label>
            <select to="dtype">
              <option />
            </select>
          </div><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default DisplayForm;
