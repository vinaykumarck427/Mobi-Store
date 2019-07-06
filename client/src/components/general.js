import React from 'react'

const brands = [
  {id:1, name:'Samsung'},
  { id: 2, name: 'Mi' },
  { id: 3, name: 'Redmi' },
  { id: 4, name: 'Apple' }
]
class General extends React.Component{
    constructor(){
      super()
      const state = {
                brand:''
      }
    }
    render(){
      return(
        <div>
            <form>
                <label>Brand:</label>
                <select value="this.state.brand" onChange={this.handleSelect} />
                <option value="">select</option>
                {brands.map(brand => <option key={brand.id}>brand.name</option>)}
                <label>Model:</label>
                <input type="text"/>
                
            </form>
        </div>
        )
    }
}
export default General