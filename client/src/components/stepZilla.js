import React from 'react'
import StepZilla from 'react-stepzilla'

import ProductForm from './productAdmin/0.productForm'
import SpecificationGeneralForm from './productAdmin/1.specificationGeneralForm'
import SpecificationDimForm from './productAdmin/2.specificationDimForm'

const steps =
    [
      {name: 'Product Add',component: <ProductForm />},
      {name: 'General Specification',component: <SpecificationGeneralForm />},
      {name: 'Dimension Specification',component: <SpecificationDimForm />}
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