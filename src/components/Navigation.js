import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from "../contexts/ProductContext";

const Navigation = props => {
	const value = useContext(ProductContext);
	console.log('value below in')
	console.log(value);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
