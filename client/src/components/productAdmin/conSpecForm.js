import React from 'react'

class SpecificationConForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            wifi: '',
            bluetooth: '',
            gps: '',
            connector: ''
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
                        Wifi <br />
                        <input type = "text" value={this.state.wifi} onChange = {this.handleChange} name = "wifi" />
                    </label><br />
                    <label>
                        Bluetooth <br />
                        <input type = "text" value={this.state.bluetooth} onChange = {this.handleChange} name = "bluetooth"/>                        
                    </label><br/>
                    <label>
                        GPS<br />
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "gps"/> Available
                        <input type = "radio" value={false} onChange = {this.handleChange} name = "gps"/> Not Available
                    </label><br />
                    <label>
                        Connector Type <br />
                        <select value = {this.state.connector} name = "connector" onChange={this.handleChange}>
                            <option value=''>Select</option>
                            <option value='Micro_USB'>MicroUsb</option>
                            <option value='typeC'>TypeC</option>                            
                        </select><br />
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationConForm