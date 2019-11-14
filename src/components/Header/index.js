import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';

import Logo from '../../assets/imgs/logo.svg';

export default function Header() {
  const qtd = useSelector(state => state[0].products.length);
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carringo</strong>
          <span>{qtd} Items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
