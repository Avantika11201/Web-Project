import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Product.css';

export const Product = ()=>{
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
                    <button>Next</button>
                </div>      
            </form>
        </div>
    )
}