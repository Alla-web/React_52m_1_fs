import "./styles.css";
import Product from "../../components/Product/Product";

import { products } from "./data";
import { animalData } from "../../components/lessons/lesson05/data";

function Homework05() {
    const productsArray = products.map((productData)=> {
        return (
            <Product
            key={animalData.id}
            id={productData.id}
            name={productData.name}
            price={productData.price}
            />
        );
    });

    console.log(productsArray);
    
  return (
    <div className="homework05-container">{productsArray}</div>
  );
}

export default Homework05;
