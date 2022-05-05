import React from 'react'


export default function Main(props){
    // console.log(props.data.name)
    const TotalTip = parseInt(props.ele.bill) * (props.ele.tip)
  return (
      <>
    <div>
      
       <p> {props.ele.name} offering a tip of { TotalTip } </p>


    </div>
    </>
  )
}
