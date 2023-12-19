import React, { useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Dashboard.css';
import { store } from '../store/store';



export const Dashboard=() => {
     
    var total = 0;
    const { input1, input3 } = useContext(store);
     
  

    
    return (
        <>
            
            <div className='dashboard_form container'>
                <h1 className="text-center">{input1}</h1>
                <h6 className="text-center">{input3}</h6>
                <div>    
                    <table>
                        <tr className="title_table">
                            <td className="table_header">S.No</td>
                            <td className="table_header">Item Name</td>
                            <td className="table_header">Quantity</td>
                            <td className="table_header">Price</td>
                        </tr>
                    </table>

                        {/* const handlePrint = () => {
                            window.print();
                        }; */}
                    
                </div>
                <div className="container total_div pt-3"><p>Total:</p><p>{total}</p> </div>
                <button className="dash_btn">Generate Receipt</button>
                <button className="dash_btn">Add More Items</button>
                
                
            </div>
            
        </>
    )
}