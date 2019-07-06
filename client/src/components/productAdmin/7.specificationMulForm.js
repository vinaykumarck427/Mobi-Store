import React from 'react'

class SpecificationMulForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            multiMedia: '',
            isFingerPrintSensor: '',
            isQuickCharging: '',
            audioJack: ''
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
                        Multi Media<br />
                        <input type = "text" value={this.state.multiMedia} onChange = {this.handleChange} name = "multiMedia" />
                    </label><br />
                    <label>
                        Finger Print Sensor <br />
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "isFingerPrintSensor"/> Available
                        <input type = "radio" value={false} onChange = {this.handleChange} name = "isFingerPrintSensor"/> Not Available                       
                    </label><br/>
                    <label>
                        Quick Charging<br />
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "isQuickCharging"/> Available
                        <input type = "radio" value={false} onChange = {this.handleChange} name = "isQuickCharging"/> Not Available
                    </label><br />
                    <label>
                        Audio Jack <br />
                            <input type = "text" value = {this.state.audioJack} onChange = {this.handleChange} name = "audioJack" /><br />
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationMulForm