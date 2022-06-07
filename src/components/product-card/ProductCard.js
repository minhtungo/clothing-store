import { useContext } from 'react';

import Button, { BUTTON_TYPES_CLASSES } from '../button/Button';
import { CartContext } from '../../contexts/Cart.context';

import { ProductCartContainer, Footer, Name, Price } from './Product.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
