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
            fourG:'',
            threeG:'',
            height: '',
            width: '',
            thickness: '',
            weight: '',
            colors: '',
            screenSize: '',
            screenResolution: '',
            aspectRatio: '',
            pixelDensity: '',
            displayType: '',
            chipset: '',
            processor: '',
            ram: '',
            internalStorage: '',
            isExpandable: '',
            cameraFrnt: '',
            cameraBack: '',
            batteryCapacity: '',
            isReplacable: '',
            wifi: '',
            bluetooth: '',
            ram: '',
            gps: '',
            connector: '',
            multiMedia: '',
            isFingerPrintSensor: '',
            isQuickCharging: '',
            audioJack: '',
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
                        <select value={this.state.simOne} name = "simOne" onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="micro">Micro</option>
                            <option value="micro">Mini</option>
                            <option value="micro">Nano</option>
                        </select>
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "fourG"/> 4G
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "threeG"/> 3G
                    </label><br />
                    <label>
                        Sim Two<br />
                        <select value={this.state.simTwo} name = "simTwo" onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="micro">Micro</option>
                            <option value="micro">Mini</option>
                            <option value="micro">Nano</option>
                        </select>
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "fourG"/> 4G
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "threeG"/> 3G<br />
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationGeneralForm