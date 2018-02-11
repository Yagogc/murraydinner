import React, { Component } from 'react';
import styled from 'styled-components';

import Top from './Top'
class App extends Component {
  render() {
    return (
		<Wrapper>
			<Top/>

			<nav className="menu">
				<button aria-expanded="false" aria-controls="menu-list">
					<span className="open">☰</span>
					<span className="close">×</span>
					Menu
				</button>
				<ul id="menu-list">
					<li>
					<a href="">Tacos</a>
					</li>
					<li>
					<a href="">Beers</a>
					</li>
					<li>
					<a href="">Wines</a>
					</li>
					<li>
					<a href="">Desserts</a>
					</li>
					<li>
					<a href="">Reservations</a>
					</li>
				</ul>
			</nav>

			<section className="features">
			<div className="feature">
				<span className="icon">🌮</span>
				<h3>Tacos</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
			</div>
			<div className="feature">
				<span className="icon">🍺</span>
				<h3>Beer</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
			</div>
			<div className="feature">
				<span className="icon">🍷</span>
				<h3>Wine</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
			</div>
			<div className="feature">
				<span className="icon">🎵</span>
				<h3>Music</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
			</div>
			</section>

			<section className="about">
			<img src="images/queso-taco.png" alt="Yummy Taco" className="about__mockup" />
			<div className="about__details">
				<h2>Featured Taco</h2>
				<p>Slim Profile, easy to hold and loaded with cheese.</p>
				<p>This is the one you have been waiting for</p>
				<button>Learn More →</button>
			</div>
			</section>


			<section className="gallery">
			<h2>Instant Grams</h2>
			<img src="https://source.unsplash.com/random/201x201" alt="" />
			<img src="https://source.unsplash.com/random/202x202" alt="" />
			<img src="https://source.unsplash.com/random/203x203" alt="" />
			<img src="https://source.unsplash.com/random/204x204" alt="" />
			<img src="https://source.unsplash.com/random/205x205" alt="" />
			<img src="https://source.unsplash.com/random/206x206" alt="" />
			<img src="https://source.unsplash.com/random/207x207" alt="" />
			<img src="https://source.unsplash.com/random/207x208" alt="" />
			<img src="https://source.unsplash.com/random/207x209" alt="" />
			<img src="https://source.unsplash.com/random/207x210" alt="" />
			</section>
		</Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
	display: grid;
	grid-gap: 20px;
`