import React from 'react'
import axios from '../../config/axios'

class SpecificationGeneralForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            launchDate: '',
            operatingSystem: '',
            phoneType: '',
            simOne: '',
            simTwo: '',
            brand:'',
            brands: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    componentDidMount(){
        axios.get('/brands')
        .then((response) => {
            console.log(response)
            this.setState(() => ({
                brands: response.data
            }))
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Launch Date<br />
                        <input type = "date" value={this.state.launchDate} onChange = {this.handleChange} name = "launchDate" />
                    </label><br />
                    <label>
                        Operating System<br />
                        <input type = "text" value={this.state.operatingSystem} onChange = {this.handleChange} name = "operatingSystem"/>                        
                    </label><br/>
                    <label>
                        brand<br />
                        <select value={this.state.brand} name = "brand" onChange={this.handleChange}>
                            <option value="">Select</option>
                            {this.state.brands.map((brand) => {
                                return <option key={brand._id} value={brand._id}>{brand.brandName}</option>
                            })}
                        </select>
                    </label><br />
                    <label>
                        Phone Type<br />
                        <input type = "text" value={this.state.phoneType} onChange = {this.handleChange} name = "phoneType"/>
                    </label><br />
                    <label>
                        Sim One<br />
                        <input type = "text" value={this.state.simOne} onChange = {this.handleChange} name = "simOne"/>
                    </label><br />
                    <label>
                        Sim Two<br />
                        <input type = "text" value={this.state.simTwo} onChange = {this.handleChange} name = "simTwo"/>
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationGeneralForm