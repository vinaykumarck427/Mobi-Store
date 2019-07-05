import React from 'react'

class SpecificationPerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chipset: '',
            processor: '',
            ram: '',
            internalStorage: '',
            isExpandable: ''
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
                        Chipset <br />
                        <input type = "text" value={this.state.chipset} onChange = {this.handleChange} name = "chipset" />
                    </label><br />
                    <label>
                        Processor <br />
                        <input type = "text" value={this.state.processor} onChange = {this.handleChange} name = "processor"/>                        
                    </label><br/>
                    <label>
                        Ram <br />
                        <input type = "radio" value={4} onChange = {this.handleChange} name = "ram"/> 4
                        <input type = "radio" value={8} onChange = {this.handleChange} name = "ram"/> 8
                        <input type = "radio" value={10} onChange = {this.handleChange} name = "ram"/> 10
                        <input type = "radio" value={12} onChange = {this.handleChange} name = "ram"/> 12
                    </label><br />
                    <label>
                        Internal Storage <br />
                        <input type = "number" value={this.state.internalStorage} onChange = {this.handleChange} name = "internalStorage"/>
                    </label><br />
                    <label>
                        Expandable<br />
                        <input type = "radio" value={true} onChange = {this.handleChange} name = "isExpandable"/> True
                        <input type = "radio" value={false} onChange = {this.handleChange} name = "isExpandable"/> False
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationPerForm