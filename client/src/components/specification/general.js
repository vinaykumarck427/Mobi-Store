import React from 'react';

const Brands = [
  {id:1, name:'Sumsung'},
  {id:2, name:'xiamoi'},
  {id:3, name:'appo'},
  {id:4, name:'vivo'},
  {id:5, name:'Apple'}
]
class GeneralForm extends React.Component{
  constructor(){
    super()
    this.state = {
      selectBrand:'',
    }
  }
  handleChange = (e) => {
    const value = e.target.type ? e.target.value : e.target.value
    const name = e.target.name
    this.setState({[name]:value})
  }
  render(){
    return (
      <div>
        <h2>Design</h2>
        <form>
          <div>
            <label>product Launch Date:</label>
            <input type="date" />
          </div>
          <br />
          <div>
            <label>Brand Name:</label>
            <select
              value={this.state.selectBrand}
              onChange={this.handleChange}
            >
              <option value="">select</option>
              {Brands.map(b => (
                <option key={b.id} value={`${b.name}`}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label>Model:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>operating system:</label>
            <select>
              <option />
            </select>
          </div>
          <br />
          <div>
            <label>simslot:</label>
            <select>
              <option value="Single">Single Sim</option>
              <option value="Dual">Dual Sim</option>
            </select>
          </div>
          <br />
          <div>
            <label>sim1:</label>
            <select>
              <option>Nano</option>
              <option>Micro</option>
            </select>
            <label>sim2:</label>
            <select>
              <option>Nano</option>
              <option>Micro</option>
            </select>
          </div>
          <div>
            <label>Network:</label>
            <input type="radio" name="rad" />
            <label>4g</label>
            <input type="radio" name="rad" />
            <label>3g</label>
            <input type="radio" name="rad" />
            <label>2g</label>
          </div>
          <br />
          <div>
            <input htmlFor="finger" type="radio" />
            <label to="finger">Finger Print Support</label>
          </div>
          <div>
            <input htmlFor="finger" type="radio" />
            <label to="finger">Support Quick Recharge</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default GeneralForm