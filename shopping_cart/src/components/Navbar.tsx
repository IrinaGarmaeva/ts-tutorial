import React from "react";
import { PropsType } from "./Header";

const Navbar = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>View products</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View Cart</button>
  );

	const content = (
		<nav className="nav">
			{button}
		</nav>
	)
  return content;
};

export default Navbar;
