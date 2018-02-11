import React, { Component } from 'react';
import styled from 'styled-components';

class Gallery extends Component {
	render() {
		return (
			<GalleryWrapper>
				<H2>Murray Grams</H2>
				<img src="https://www.fillmurray.com/g/201/201" alt="" />
				<img src="https://www.fillmurray.com/g/202/202" alt="" />
				<img src="https://www.fillmurray.com/g/203/203" alt="" />
				<img src="https://www.fillmurray.com/g/204/204" alt="" />
				<img src="https://www.fillmurray.com/g/205/205" alt="" />
				<img src="https://www.fillmurray.com/g/206/206" alt="" />
				<img src="https://www.fillmurray.com/g/207/207" alt="" />
				<img src="https://www.fillmurray.com/g/205/208" alt="" />
				<img src="https://www.fillmurray.com/g/207/209" alt="" />
				<img src="https://www.fillmurray.com/g/207/213" alt="" />
			</GalleryWrapper>
		)
	}
};

export default Gallery;

const GalleryWrapper = styled.section`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

	& img {
		width: 100%;
	}
`
const H2 = styled.h2`
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	grid-gap: 20px;
	align-items: center;

	&:before,
	&:after {
		display: block;
		content: '';
		height: 10px;
		background: linear-gradient(to left, yellow, transparent);
	}

	&:after {
		background: linear-gradient(to right, yellow, transparent);
	}
`