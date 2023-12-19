import React ,{createContext, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 import '../assets/css/business.css'
//import { Dashboard } from "./Dashboard";
import { useContext } from "react";
import { store } from "../store/store";
import { Link , useHistory } from 'react-router-dom';


const businessName= createContext();
const ntnNumber = createContext();
 export const Business = ()=>{

    const history = useHistory(); // Initialize useHistory
    const handleBusiness = () => {
        history.push('/Product');
    }

    const { setInputs } = useContext(store);

    const[input1, setinput1]=useState('');
    const[input2, setinput2]=useState('');
    const[input3, setinput3]=useState('');
    const[input4, setinput4]=useState('');
    const[input5, setinput5]=useState('');
    const[input6, setinput6]=useState(''); 

    

    const field1=(e)=>{
        setinput1(e.target.value)
        setInputs({input1: e.target.value});
    }
    const field2=(e)=>{
        setinput2(e.target.value)
    }
    const field3=(e)=>{
        setinput3(e.target.value)
        setInputs({input3: e.target.value});
    }
    const field4=(e)=>{
        setinput4(e.target.value)
    }
    const field5=(e)=>{
        setinput5(e.target.value)
    }
    const field6=(e)=>{
        setinput6(e.target.value)
    }
    

    
    

    return(
        <>
            <div className="container mainDiv">
                <div className="row">
                    <div className="col">
                        <form className=" mb-5 business_form">
                            <h2 className="text-dark">Business Information</h2>    
                            <input type="text" onChange={field1} required placeholder="Business Name" />
                            <input type="text" onChange={field2} required placeholder="Business Type" />
                            <input type="text" onChange={field3} required placeholder="NTN #" />
                            <input type="text" onChange={field4} required placeholder="Invoice #" />
                            <input type="text" onChange={field5} required placeholder="Operator Name" />
                            <input type="text" onChange={field6} required placeholder="Client Type" />
                            <button onClick={handleBusiness}>Next</button>
                        </form>
                    </div>
                    <div className="col">
                        {/* using context api the display */}
                        <div className="dsiplay_business">
                            <div className="rounded border">
                                <h1 className="text-center">{input1}</h1>
                                <h6 className="text-center">NTN # {input3}</h6>
                                {/* <Dashboard name = { input1 } ntn={input3}/> */}
                                
                            </div>
                            <h5 className="text-center mt-1">Sales Receipt</h5>
                            <div className="border rounded px-3">
                                <p><strong>Business Type: </strong> {input2}</p>
                                <p><strong>Invoice #: </strong> {input4}</p>
                                <p><strong>Operator Name: </strong> {input5}</p>
                                <p><strong>Client Type: </strong> {input6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {businessName,ntnNumber};