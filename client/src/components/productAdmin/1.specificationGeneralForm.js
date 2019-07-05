import React from 'react'
// import axios from '../../config/axios'

class SpecificationGeneralForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            launchDate: '',
            operatingSystem: '',
            phoneType: '',
            simOne: '',
            simTwo: '',
            brand: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Launch Date
                        <input type = "date" value={this.state.launchDate} onChange = {this.handleChange} name = "launchDate" />
                    </label><br />
                    <label>
                        Operating System
                        <input type = "text" value={this.state.operatingSystem} onChange = {this.handleChange} name = "operatingSystem"/>                        
                    </label><br/>
                    {/* <label>
                        brand
                        <select value={this.state.category} name = "brand" onChange={this.handleChange}>
                            <option value="">Select</option>
                            {this.state.brands.map((brand) => {
                                return <option key={brand._id} value={brand._id}>Brand Name</option>
                            })}
                        </select>

                    </label> */}
                    <label>
                        Phone Type
                        <input type = "text" value={this.state.phoneType} onChange = {this.handleChange} name = "phoneType"/>
                    </label><br />
                    <label>
                        Sim One
                        <input type = "text" value={this.state.simOne} onChange = {this.handleChange} name = "simOne"/>
                    </label><br />
                    <label>
                        Sim Two
                        <input type = "text" value={this.state.simTwo} onChange = {this.handleChange} name = "simTwo"/>
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationGeneralForm