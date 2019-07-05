import React from 'react'

class SpecificationCamBatForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cameraFrnt: '',
            cameraBack: '',
            batteryCapacity: '',
            isReplacable: ''
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
                        Front Camera <br />
                        <input type = "text" value={this.state.cameraFrnt} onChange = {this.handleChange} name = "cameraFrnt" />
                    </label><br />
                    <label>
                        Back Camera <br />
                        <input type = "text" value={this.state.cameraBack} onChange = {this.handleChange} name = "cameraBack"/>                        
                    </label><br/>
                    <label>
                        Battery Size <br />
                        <input type = "number" value={this.state.batteryCapacity} onChange = {this.handleChange} name = "batteryCapacity"/>
                    </label><br />
                    <label>
                        Replacable<br />
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "isReplacable"/> True
                        <input type = "radio" value={false} onChange = {this.handleChange} name = "isReplacable"/> False
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationCamBatForm