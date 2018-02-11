import React, { Component } from 'react';
import styled from 'styled-components';

import Top from './Top'
import Features from './Features';
class App extends Component {
  render() {
    return (
		<Wrapper>
			<Top/>



			<Features />

		</Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
	display: grid;
	grid-gap: 20px;
`