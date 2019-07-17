import React from "react";

class PerformanceForm extends React.Component {
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
        <h2>Performance</h2>
        <form>
          <div>
            <label>chipset:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>Architecture:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>Processor:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>graphics:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>Ram:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default PerformanceForm;
