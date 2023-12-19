import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Product.css';
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const Product = ()=>{
    const history = useHistory(); // Initialize useHistory
    const handleProduct = () => {
        history.push('/Dashboard');
    }
    return(
        <div className="container product_area">
            <form className=" mb-5 product_form">
                <h2 className="text-dark">Product Information</h2>    
                <input type="text" required placeholder="Product Name" />
                <input type="text" required placeholder="Quantity (Units)" />
                <input type="text" required placeholder="Price (per Unit)" />
                <input type="text" required placeholder="Category" />
                <input type="file" accept="image/*" required placeholder="Upload File"  />
                
                <div>
                    <button>Add Product</button>
                    <button onClick={handleProduct}>Next</button>
                </div>      
            </form>
        </div>
    )
}