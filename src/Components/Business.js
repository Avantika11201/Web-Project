import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/business.css'
export const Business = ()=>{
    const[input1, setinput1]=useState('');
    const[input2, setinput2]=useState('');
    const[input3, setinput3]=useState('');
    const[input4, setinput4]=useState('');
    const[input5, setinput5]=useState('');
    const[input6, setinput6]=useState(''); 

    const field1=(e)=>{
        setinput1(e.target.value)
    }
    const field2=(e)=>{
        setinput2(e.target.value)
    }
    const field3=(e)=>{
        setinput3(e.target.value)
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
            <div className="container">
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

                            <button>Next</button>
                            
                        </form>
                        

                    </div>
                    <div className="col">
                        {/* using context api the display */}
                        <div className="dsiplay_business">
                            <p><strong>Business Name: </strong> {input1}</p>
                            <p><strong>Business Type: </strong> {input2}</p>
                            <p><strong>NTN #: </strong> {input3}</p>
                            <p><strong>Invoice #: </strong> {input4}</p>
                            <p><strong>Operator Name: </strong> {input5}</p>
                            <p><strong>Client Type: </strong> {input6}</p>
                        </div>
                            {/* <h1>{ input1 }</h1>
                            <h1>{ input2 }</h1>
                            <h1>{ input3 }</h1>
                            <h1>{ input4 }</h1>
                            <h1>{ input5 }</h1>
                            <h1>{ input6 }</h1> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}