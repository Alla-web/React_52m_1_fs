import "./styles.css";
import Product from "../../components/Product/Product";

import { products } from "./data";

function Homework05() {
    const productsElements = products.map((productData)=> {
        return (
            <Product
            key={productData.id}            
            productName={productData.name}
            productPrice={productData.price}
            />
        );
    });

    console.log(productsElements);
    
  return (
    <div className="homework05-container">{productsElements}</div>
  );
}

export default Homework05;
