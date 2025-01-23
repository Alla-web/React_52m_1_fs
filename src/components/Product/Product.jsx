import './styles.css';

function Product({id, name, price}) {    
  return (
  <div className="product-container">
    <div className='product-property-container'>
    <p className='product-property-title'>ID:</p>
    <p>{id}</p>
    </div>
    <div className='product-property-container'>
    <p className='product-property-title'>Title:</p>
    <p>{name}</p>
    </div>
    <div className='product-property-container'>
    <p className='product-property-title'>Price:</p>
    <p>{price}</p>
    </div>
  </div>
);
}

export default Product;
