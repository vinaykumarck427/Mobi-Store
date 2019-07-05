import React from 'react'
import StepZilla from 'react-stepzilla'

import ProductForm from './productAdmin/0.productForm'
import SpecificationGeneralForm from './productAdmin/1.specificationGeneralForm'

const steps =
    [
      {name: 'Product Add',component: <ProductForm />},
      {name: 'General Specification',component: <SpecificationGeneralForm />},
    ]

class Steps extends React.Component {
    render(){
        return(
            <div>
                <br />
                <StepZilla steps={steps} showSteps={false}/>
            </div>
        )
    }
}

export default Steps