import React from "react";

class NetworkForm extends React.Component {
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
        <h1>Network:</h1>
        <form>
          <div>
            <label>Network:</label>
            <select>
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="volte">is support voLTE:</label>
            <input to="volte" type="checkbox" />
          </div>
          <br />
          <div>
            <pre>
              <label>
                Sim1:
                <br />
                <label htmlFor="4g">4g bands:</label>
                <select to="4g">
                  <option />
                </select>
                <br />
                <label htmlFor="3g">3g bands:</label>
                <select to="3g">
                  <option />
                </select>
                <br />
                <label htmlFor="3g">2g bands:</label>
                <select to="3g">
                  <option />
                </select>
              </label>
            </pre>
          </div>
          <div>
            <label htmlFor="wifi">Wifi:</label>
            <input to="wifi" type="checkbox" />
          </div>
          <div>
            <label htmlFor="wtype">Wifi Type:</label>
            <select to="wtype">
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="blth">bluetooth:</label>
            <input to="blth" type="checkbox" />
          </div>
          <div>
            <label htmlFor="bver">bluetooth version:</label>
            <select to="wtype">
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="gps">GPS:</label>
            <input to="gps" type="checkbox" />
          </div>
          <div>
            <label htmlFor="gtype">GPS type:</label>
            <select to="gtype">
              <option />
            </select>
          </div>
          <div>
            <label htmlFor="usb">USB Connection:</label>
            <select to="usb">
              <option />
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="utype">USB Type-C:</label>
            <input to="utype" type="checkbox" />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default NetworkForm;
