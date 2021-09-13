import './Product.css';
import { Link } from 'react-router-dom';
import { formatter } from '../../formatter';

const Product = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className='product'>
      <img src={imageUrl} alt={name} />

      <div className='product__info'>
        <p className='info__name'>{name}</p>
        <p className='info__description'>{description.substring(0, 100)}...</p>
        <p className='info__price'>{formatter.format(price)}</p>
      </div>
      <Link to={`/product/${productId}`} className='info__button'>
        View
      </Link>
    </div>
  );
};

export default Product;
