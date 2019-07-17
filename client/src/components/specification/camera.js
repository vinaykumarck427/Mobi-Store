import React from "react";

class CameraForm extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  handleChange = e => {
    const value = e.target.type ? e.target.value : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form>
          <h1>Front Camera:</h1>
          <div>
            <label>resolution:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>Physical Asperture:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>video Recording:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <h1>Main Camera</h1>
          <div>
            <label>resolution:</label>
            <select>
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="focus">auto focus:</label>
            <input to="focus" type="checkbox" />
          </div>
          <br />
          <div>
            <label>Physical Asperture:</label>
            <select>
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="flash">Flash:</label>
            <input to="flash" type="checkbox" />
          </div>
          <div>
            <label htmlFor="ftype">Flash Type:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="imgrsltn">Image Resolution:</label>
            <select to="imgrsltn">
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="setting">Settings:</label>
            <select to="setting">
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="mode">Mode:</label>
            <select to="mode">
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="ftrs">Features:</label>
            <select to="ftrs">
              <option />
            </select>
          </div>
          <div>
            <label>video Recording:</label>
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
export default CameraForm;
