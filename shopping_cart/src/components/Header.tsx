import React from "react";
import Navbar from "./Navbar";
import useCart from "../hooks/usecart";

export type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
	const {totalItems, totalPrice} = useCart()

  return (
    <header className="header">
      <div className="header__title-bar">
        <h1>Watches Company</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Navbar viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
};

export default Header;
