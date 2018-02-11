import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header'
import Cta from './Cta'

class Menu extends Component {

	toggleMenu() {
		const navButton = document.querySelector('button[aria-expanded]');

		const expanded = navButton.getAttribute('aria-expanded') === 'true' || false;

		navButton.setAttribute('aria-expanded', !expanded);
	}

	render() {
		return (
			<MenuWrapper>
				<Button
				aria-expanded="false" aria-controls="menu-list"
				onClick={this.toggleMenu}>
					<span className="open">☰</span>
					<span className="close">×</span>
					Menu
				</Button>
				<MenuList id="menu-list">
					<li>
						<MenuItem href="">Tacos</MenuItem>
					</li>
					<li>
						<MenuItem href="">Beers</MenuItem>
					</li>
					<li>
						<MenuItem href="">Wines</MenuItem>
					</li>
					<li>
						<MenuItem href="">Desserts</MenuItem>
					</li>
					<li>
						<MenuItem href="">Reservations</MenuItem>
					</li>
				</MenuList>
			</MenuWrapper>
		)
	}
};

export default Menu;

const MenuWrapper = styled.nav`
	@media (max-width: 1000px) {
		order: -1;
		perspective: 800px;
	}
`

const MenuList = styled.ul`
	display: grid;
	grid-gap: 10px;
	padding: 0;
	list-style: none;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

	@media (max-width: 1000px) {
		max-height: 0;
		overflow: hidden;
		transform: rotateX(90deg);
		transition: all 0.5s;
	}
`

const MenuItem = styled.a`
	background: #ffc600;
	display: block;
	text-decoration: none;
	padding: 10px;
	text-align: center;
	color: #272727;
	text-transform: uppercase;
	font-size: 20px;

	@media (max-width: 1000px) {
		font-size: 16px;
	}
`

const Button = styled.button`
	background: #ffc600;
	border: 0;
	padding: 10px 20px;
	display: none;

	@media (max-width: 1000px) {
		display: block;
		margin-bottom: 10px;
		
		&[aria-expanded="false"] .close {
			display: none;
		}

		&[aria-expanded="true"] .close {
			display: inline-block;
		}

		&[aria-expanded="true"] .open {
			display: none;
		}
		& .open {
			font-size: 11px;
		}
		&[aria-expanded="true"] ~ ul {
			display: grid;
			max-height: 500px;
			transform: rotateX(0);
		}
	}
`