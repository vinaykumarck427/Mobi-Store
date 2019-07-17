import React from "react";

class StorageForm extends React.Component {
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
        <h2>Storage</h2>
        <form>
          <div>
            <label>Internal Memory:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <div>
              <label htmlFor="expand">Expand Memory:</label>
              <input to="expand" type="checkbox" />
            </div>
            <label>expandable Memory:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="usb">usbotg:</label>
            <input to="usb" type="checkbox" />
          </div><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default StorageForm;
