import React from 'react'

class SpecificationDisForm extends React.Component {
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
                        <input type = "number" value={this.state.ram} onChange = {this.handleChange} name = "ram"/>
                    </label><br />
                    <label>
                        Internal Storage <br />
                        <input type = "number" value={this.state.internalStorage} onChange = {this.handleChange} name = "internalStorage"/>
                    </label><br />
                    <label>
                        Expandable<br />
                        <input type = "radio" value={this.state.isExpandable} onChange = {this.handleChange} name = "isExpandable"/> True
                        <input type = "radio" value={this.state.isExpandable} onChange = {this.handleChange} name = "isExpandable"/> False
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationDisForm