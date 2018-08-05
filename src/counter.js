import React, { Component } from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

// React Emotion
const Fancy = styled("h1")`
	color: hotpink
`;

// Emotion
const red = "#f00";
const className = css`
	color: ${red}
`;

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};

		this.climb = this.climb.bind(this)
	}

	climb() {
		this.setState(() => ({
			count: this.state.count + 1
		}))
	}

	render() {
		return (
			<div onClick={this.climb}>
				<Fancy>Count: {this.state.count}</Fancy>
			</div>
		)
	}
}
