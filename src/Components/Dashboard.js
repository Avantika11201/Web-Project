import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from '../store/store';


export const Dashboard=() => {
  
    const { input1, input3 } = useContext(store);
    
    return (
        <>
            
            <div className='dashboard_form'>
                <div>
                    <h1>{input1}</h1>
                    <h6>{input3}</h6>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </table>
                </div>
                
                <button>Generate Receipt</button>
                <button>Add More Items</button>
                
                
            </div>
            
        </>
    )
}