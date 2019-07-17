import React from "react";

class BatteryForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = e => {
    const value = e.target.type ? e.target.value : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h2>Battery</h2>
        <form>
          <div>
            <label>capacity:</label>
            <select>
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="btype">Batery type:</label>
            <select to="btype">
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="replace">Replacable:</label>
            <input to="replace" type="checkbox" />
          </div>
          <div>
            <label htmlFor="blife">Battery Life:</label>
            <select to="replace">
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="quick">quick charging:</label>
            <input to="quick" type="checkbox" />
          </div>
          <div>
            <label htmlFor="bchrg"> charge Type:</label>
            <select to="bchrg">
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
export default BatteryForm;
