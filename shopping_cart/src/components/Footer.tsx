import React from "react";
import useCart from "../hooks/usecart";

type FooterProps = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: FooterProps) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Items: {totalPrice}</p>
			<p>Shopping Cart &copy; {year}</p>
    </>
  );

  return (
		<footer>
			{pageContent}
		</footer>
	);
};

export default Footer;
