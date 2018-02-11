import React, { Component } from 'react';
import styled from 'styled-components';

import Top from './Top'
import Features from './Features';
import About from './About';
import Gallery from './Gallery';
class App extends Component {
  render() {
    return (
		<Wrapper>
			<Top/>

			<Features />

			<About />

			<Gallery />
		</Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
	display: grid;
	grid-gap: 20px;
`