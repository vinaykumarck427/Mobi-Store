import React from 'react'

class SpecificationDisForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            screenSize: '',
            screenResolution: '',
            aspectRatio: '',
            pixelDensity: '',
            displayType: ''
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
                        Screen Size <br />
                        <input type = "number" value={this.state.screenSize} onChange = {this.handleChange} name = "screenSize" />
                    </label><br />
                    <label>
                        Screen Resolution <br />
                        <input type = "number" value={this.state.screenResolution} onChange = {this.handleChange} name = "screenResolution"/>                        
                    </label><br/>
                    <label>
                        Aspect Ratio <br />
                        <input type = "number" value={this.state.aspectRatio} onChange = {this.handleChange} name = "aspectRatio"/>
                    </label><br />
                    <label>
                        Pixel Density <br />
                        <input type = "number" value={this.state.pixelDensity} onChange = {this.handleChange} name = "pixelDensity"/>
                    </label><br />
                    <label>
                        Display Type <br />
                        <input type = "text" value={this.state.displayType} onChange = {this.handleChange} name = "displayType"/> <br />
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationDisForm