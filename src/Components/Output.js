import React from 'react'
import Main from './main'

export default function Output(props) {
  return (
    <div className="container border">

     <div className="container ">
     <p className="h1 text-center"> CUSTOMER LIST </p>
     </div>
    
    <div className="form-floating">


    <div className="container border overflow-auto" style={myStyle.output}>


    {
            props.data.map((ele , index) => {
                return <Main ele={ele} key={index}/>
            })
    }
    

    </div>



    <label htmlFor="floatingTextarea2"> </label>
    </div>

    <div>

    </div>
    <div className="container row justify-content-md-center">
    
     <button className="h3 text-center bg-success bg-gradient" style={myStyle.buttton} onClick={props.totalCustomerNumber}> Calculate Tip And Customer </button>
     
     </div>

    <div className="container">

    <div className="row">
    <div className="col-md-8 border text-center">Total Customer</div>
    <div className="col-6 col-md-4 border text-center">Tip</div>
   </div>
   
   <div className="row">
    <div className="col-md-8 border text-center"> {props.customer} </div>
    <div className="col-6 col-md-4 border text-center"> 0 </div>
   </div>

   </div>




    </div>
  )
}

const myStyle = {
    
    buttton: {
        width : "30%"
    },
    output : {
      height : 260,
      width  : 1000
    }
}















 {/* <h1>
         {
            props.data.map((ele , index) => {
                return <Main ele={ele} key={index}/>
            })
    }
    </h1> */}