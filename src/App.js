import Main from './Components/main';
import { useState } from 'react';
import './App.css';
import Output from './Components/Output';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {

  const [first, setfirst] = useState({
    bill : "" , name : "" , tip : "0.30"
  });
  const [data, setData] = useState([]);
  const [customer , setCustomer] = useState(0);
  const [customerTip , setCustomerTip] = useState(0);

  const handleChange = (e) => {
    setfirst({...first , [e.target.name]:e.target.value})
  }

  const add = () => {
   setData([...data , first])
  }

  const totalCustomerNumber = () => {
   setCustomer(data.length);
    
  }


  return (


    <div className="App">

     
    <Header/>

<div className="mb-3">
        <h3 className="text-center"> ENTER YOUR BILL Amount </h3>
        <input type="number" className="form-control border border-5" onChange={handleChange} name="bill"/>

        <div className="row g-3 align-items-center mb-10" style={myStyle.input}>
        <div className="col-auto">
        <label  className="col-form-label">How was the Service</label>
        </div>
        <div className="col-auto">

        <select name="tip" onChange={handleChange}>
          <option value = "0.30"> OUTSTANDING - 30 % </option>
          <option value = "0.20"> EXELLENT - 20 % </option>
          <option value = "0.15"> MEDIUM - 15 %</option>
          <option value = "0.10"> NOT GOOD - 10%</option>
         </select>
        
        </div>
        <div className="col-auto">
        <input type="text"  className="form-control border border-5" onChange={handleChange} name="name"/>
        </div>
        <div className="col-auto">
        <button 
        onClick={add}
        className="btn btn-outline-danger"
        
        >ADD CUSTOMER
        </button>
        </div>
        

         </div>

  </div>

       <Output 
        data={data} 
        totalCustomerNumber={totalCustomerNumber}
        customer={customer}
        />
       <Footer/>

    </div>
  );
}

const myStyle = {
  input : {
      marginTop : "5%",
      marginLeft: " 20%",
  }
}

export default App;
