import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className='product'>
      <img src={imageUrl} alt={name} />

      <div className='product__info'>
        <p className='info__name'>{name}</p>
        <p className='info__description'>{description.substring(0, 100)}...</p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        voluptas ex perferendis fuga autem sunt.
        <p className='info__price'>${price}</p>
      </div>
      <Link to={`/product/${productId}`} className='info__button'>
        View
      </Link>
    </div>
  );
};

export default Product;
