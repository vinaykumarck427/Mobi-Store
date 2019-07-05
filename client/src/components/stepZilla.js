import React from 'react'
import StepZilla from 'react-stepzilla'

import ProductForm from './productAdmin/0.productForm'
import SpecificationGeneralForm from './productAdmin/1.specificationGeneralForm'
import SpecificationDimForm from './productAdmin/2.specificationDimForm'
import SpecificationDisForm from './productAdmin/3.specificationDisForm'
import SpecificationPerForm from './productAdmin/4.specificationPerForm'
import SpecificationCamBatForm from './productAdmin/5.specificationCambatForm'

const steps =
    [
      {name: 'Product Add',component: <ProductForm />},
      {name: 'General Specification',component: <SpecificationGeneralForm />},
      {name: 'Dimension Specification',component: <SpecificationDimForm />},
      {name: 'Display Specification',component: <SpecificationDisForm />},
      {name: 'Performance Specification',component: <SpecificationPerForm />},
      {name: 'Camera Battery',component: <SpecificationCamBatForm />},
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